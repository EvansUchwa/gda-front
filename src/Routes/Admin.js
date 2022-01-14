import { useParams } from 'react-router-dom';
import '../Assets/styles/admin.css'
import {
    ListeComptes, ActivationComptes
} from '../RoutesSubComponents/admin';

const Admin = () => {
    const params = useParams();
    const { action, menu, target } = params
    const userType = 'Admin'
    return <>
        <div className="dashboardPart">
            <div className='adminPart'>
                {
                    (() => {
                        let page = null;
                        if (menu == "Emplois") {
                            if (action == "liste") {
                                page = <ListeComptes props={{ typeCompte: 'emplois(' + target + ')' }} />
                            } else if (action == 'activation') {
                                page = <ActivationComptes props={{ typeCompte: 'emplois(' + target + ')' }} />
                            }
                        }
                        else if (menu == "Boutique") {
                            if (action == "liste") {
                                page = <ListeComptes props={{ typeCompte: target }} />
                            } else if (action == 'activation') {
                                page = <ActivationComptes props={{ typeCompte: target }} />
                            }
                        }
                        else if (menu == "Immobilier") {
                            if (action == "liste") {
                                page = <ListeComptes props={{ typeCompte: 'immobilier(' + target + ')' }} />
                            }
                        }
                        else {
                            page = 'hoho'
                        }
                        return page;
                    })()
                }
            </div>
        </div>
    </>

}

export default Admin;
