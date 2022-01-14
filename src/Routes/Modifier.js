import { useParams } from "react-router-dom";
import { UpdateProfilForm } from "../RoutesSubComponents/modifier-Profil";
import { UpdatePasswordForm } from "../RoutesSubComponents/modifier-Motdepasse";
const Modifier = () => {
    const params = useParams();
    const { cible, hash } = params;
    return <>
        <div className="updateInfoPart">

            {
                (() => {
                    if (cible) {
                        return <>
                            <h1>Modifier votre {cible} </h1>
                            <UpdateProfilForm />
                        </>
                    } else if (hash) {
                        return <>
                            <h1>Veuillez entrez votre nouveau mot de passe</h1>
                            <UpdatePasswordForm props={{ hash }} />
                        </>
                    }
                })()
            }
        </div>
    </>
}

export default Modifier;