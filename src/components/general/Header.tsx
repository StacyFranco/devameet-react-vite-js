import { Navigation } from "./Navigation";
import logo from "../../assets/images/logo.svg";

type HeaderProps = {
    hide?: boolean
}

export const Header: React.FC<HeaderProps> = ({hide}) => {
    return (
        <div className={"container-header "+ (hide ? 'hide' : '')}>
        <img src={logo} alt="Logo Devameet" className="logo"/>
        <Navigation />
    </div>
    );
}