import { PublicInput } from "../general/PublicInput";
import { MeetUserHeader } from "../meet/MeetUserHeader";

import linkIcon from '../../assets/images/link_active.svg';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const RoomLink = () => {

    const navigate = useNavigate();
    const [link, setLink] = useState('');
    const [error, setError] = useState('');

    const navigateToRoom = () =>{
        setError('');
        if(link && link.length >= 8){
            return navigate('/room/'+link);
        }
        setError('Link inválido, por favor verifique!');
    }

    return (
        <div className="container-principal">
            <div className="container-meet link">
                <MeetUserHeader isLink={true}/>
                {error && <p className="error">{error}</p>}
                <PublicInput icon={linkIcon}
                    type="text" alt="Link" name="Informe o link da reunião para entrar"
                    modelValue={link} setValue={setLink}
                    />
                <button onClick={navigateToRoom}>Entrar</button>
            </div>
        </div>
    );
}