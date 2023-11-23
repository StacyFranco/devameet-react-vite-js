import logo from '../assets/images/logo.svg';
import loginIcon from '../assets/images/mail.svg';
import passwordIcon from '../assets/images/key.svg';
import { PublicInput } from '../components/general/PublicInput';
import { useState } from 'react';
import { LoginServices } from '../services/LoginServices';

const loginServices = new LoginServices();

export const Login = () => {

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const doLogin = async () => {
        try {
            setError('');
            if (!login || !login.trim()
                || !password || !password.trim()) {
                return setError("Favor informar usuário e password");
            }

            setLoading(true);
            await loginServices.login({
                login,
                password
            });
            setLoading(false);

        } catch (e: any) {
            console.log('Erro ao efetuar login:', e);
            setLoading(false);
            if (e?.response?.data?.message) {
                return setError(e?.response?.data?.message);
            } else {
                return setError("Não foi possível efetuar o login, tente novamente!");
            }
        }
    }

    const buttonText = () => {
        return loading ? "...Carregando" : "Login";
    }

    return (
        <div className="container-public">
            <img src={logo} alt="Logo Devameet" className="logo" />
            <form>
                {error && <p className="error">{error}</p>}


                <PublicInput icon={loginIcon} alt="Email" name="Email" type="text"
                    modelValue={login} setValue={setLogin} />

                <PublicInput icon={passwordIcon} alt="Senha" name="Senha" type="password"
                    modelValue={password} setValue={setPassword} />

                <button type="button" onClick={doLogin} disabled={loading}>{buttonText()}</button>
                <div className="link">
                    <p>Não possui uma conta?</p>
                    <a >Faça seu cadastro agora! </a>
                </div>
            </form>
        </div>
    )
}