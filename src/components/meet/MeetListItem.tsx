import roomLinkIcon from '../../assets/images/room_link.svg';
import copyIcon from '../../assets/images/copy.svg';
import editIcon from '../../assets/images/edit.svg';
import trashIcon from '../../assets/images/trash.svg';
import { useNavigate } from 'react-router-dom';

type MeetListItemProps = {
    meet: any,
    selectToRemove(id: string):void
}

export const MeetListItem: React.FC<MeetListItemProps> = ({meet, selectToRemove}) => {
    const mobile = window.innerWidth <= 992;

    const navigate = useNavigate();

    const goToRoom = () => {
        navigate('/room/'+ meet?.link);
    }

    const goToEdit = () => {
        navigate('/edit/'+ meet?.id);
    }

    const copyLink = () => {
        navigator.clipboard.writeText(window?.location?.href + 'room/' + meet?.link);
    }

    return (
        <div className="container-meet-list-item">
            <div className="meet">
                <div className="color" style={{backgroundColor : meet?.color}}/>
                <span>{meet?.name}</span>
            </div>
            <div className="actions">
                {mobile && <img src={roomLinkIcon} alt='entrar na reunião' onClick={goToRoom}/>}
                <img src={copyIcon} alt='copiar link da reunião' onClick={copyLink}/>
                {!mobile && <img src={editIcon} alt='editar reunião' onClick={goToEdit}/>}
                <img src={trashIcon} alt='deletar reunião' onClick={() => selectToRemove(meet?.id)}/>
            </div>
        </div>
    );
}