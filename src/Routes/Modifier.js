import { useParams } from "react-router-dom";
import { UpdateProfilForm } from "../RoutesSubComponents/modifierProfilComponents";
const Modifier = () => {
    const params = useParams();
    const { cible } = params;
    return <div className="dashboardPart">
        <div className="updateInfoPart">
            <h1>Modifier votre {cible} </h1>
            <UpdateProfilForm />
        </div>
    </div>
}

export default Modifier;