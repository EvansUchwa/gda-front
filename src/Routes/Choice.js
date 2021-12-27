import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../Contexts/userContext";

const Choice = () => {
    const context = useContext(UserContext);
    const { setUserInfo } = context
    const handleChoice = (event, userType) => {
        console.log(userType)
        setUserInfo({ ...context.userInfo, userType })
    }
    return <div className="choiceUser" >
        <Link to="/Finaliser-Inscription"
            onClick={(event) => handleChoice(event, 'Candidat')}>
            A la première connexion D'un candidat
        </Link>
        <Link to="/Finaliser-Inscription"
            onClick={(event) => handleChoice(event, 'Recruteur')}>
            A la première connexion D'un recruteur
        </Link>

        <Link to="/Dashboard" onClick={(event) => handleChoice(event, 'Candidat')}>Dashboard Candidat</Link>
        <Link to="/Dashboard" onClick={(event) => handleChoice(event, 'Recruteur')}>Dashboard Recruteur</Link>
        <Link to="#" >Dashboard Vip</Link>

    </div>
}

export default Choice;