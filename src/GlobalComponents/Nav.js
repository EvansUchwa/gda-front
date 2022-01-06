import { useState } from "react"
import { adminMenu, entrepriseMenu, candidatMenu } from "../RawData/links";
import { Link, useNavigate } from "react-router-dom"
import { Modal } from "./Modal"
import { SimpleImage, UrlImage } from "./Img";
import { useAuth } from "../hooks/authHooks";
const toggleDashNav = () => {
    document.querySelector('.dashbordNav').classList.toggle('dashbordNav-visible')
    document.querySelector('.dashboardPart').classList.toggle('dashboardPartAlign')
}
const toggleOptionsNav = (event) => {
    event.target.nextElementSibling.classList.toggle('native-options-visible')
    if (event.target.attributes['class'].value == 'dashMenuDropdown') {
        event.target.children[0].classList.toggle('mdi-rotate-90')
    }
}
function dispatchUserPic(userType) {
    if (userType == 'CANDIDAT') {
        return 'photo1_url'
    } else if (userType == 'ENTREPRISE') {
        return 'logo_url';
    }
}

export const Nav = () => {

    const handleMobileMenu = () => {
        document.querySelector('.nav-links').classList.toggle('nav-links-visible')
    }

    return <header>
        <section className="nav-contact">
            <div><b>Mail:</b> <span>contact@gda-services.com</span> </div>

            <div>
                <b>Tel:</b>
                <span>+229 94326044</span>/
                <span>+229 62849541</span>
            </div>
        </section>
        <nav className="simpleNav">
            <div className="nav-logo">
                <Link to='/'>
                    <SimpleImage props={{ src: 'logo.png', alt: 'Website logo' }} />
                </Link>
            </div>

            <div className="nav-mobileBtn">
                <i className="mdi mdi-menu" onClick={() => handleMobileMenu()}></i>
            </div>

            <div className="nav-links">
                <Link to="/">Accueil</Link>
                <Link to="/Formations">Nos Formations</Link>
                <Link to="/Services">Nos Service</Link>
                <div id="offerLinks">
                    <span>Nos offres</span>
                    <OfferLinks props={{ className: "allTypeOfferLinks", id: "" }} />
                </div>
                <Link to="/Contact">Contact</Link>
                <OfferLinks props={{ className: "allTypeOfferLinksMobile", id: "" }} />

                <div className="nav-authLinks">
                    <Link className="semiRounded" to="/Authentification/Connexion">
                        <i className="mdi mdi-login"></i>
                        Connexion</Link>
                </div>
            </div>

        </nav></header>
}




export const AsideDashNav = () => {
    const { authedInfo, userType, logout } = useAuth();
    const { other, general } = authedInfo;

    return <aside className="dashbordNav">
        <section className="dashbordNav-toggler">
            <i className="mdi mdi-arrow-left" onClick={() => toggleDashNav()}></i>
        </section>
        <section className="dashbordNav-userConnected">
            <UrlImage props={{
                src: other[dispatchUserPic(userType)], id: '', rounded: true,
                alt: 'Aside Nav Profil pic', className: ''
            }} />
            <p>
                <b>{general.name}</b><br />
                <span>Compte {userType.toLowerCase()}</span>
            </p>
        </section>

        <section className="dashbordNav-links">
            <Link onClick={() => toggleDashNav()} to={"/Dashboard"}>
                <i className="mdi mdi-view-dashboard"></i> Dashboard</Link>
            {
                (() => {
                    if (userType == 'candidat') {
                        return <>
                            {candidatMenu.map((lk, index) => <Link to={lk.link}
                                key={'candidatMenuLink' + index}>
                                <i className={"mdi " + lk.icons}></i>
                                {lk.ph}
                            </Link>)}
                        </>
                    }
                    else if (userType == 'recruteur') {
                        return <>
                            {
                                entrepriseMenu.map((lk, index) => <Link to={lk.link}
                                    key={'entrepriseMenuLink' + index}>
                                    {lk.ph}
                                </Link>)
                            }
                        </>
                    }
                    else if (userType == 'Admin') {
                        return <>
                            {
                                adminMenu.map((am, index) => <div key={"adminMenu" + index}>
                                    <i className={"mdi " + am.menuIcon}></i>
                                    <span className="dashMenuDropdown"
                                        onClick={(event) => toggleOptionsNav(event)}>
                                        {am.menuName}
                                        <i className="mdi mdi-chevron-right"></i>
                                    </span>
                                    <section>
                                        {
                                            am.menuOptions.map((amM0, index) => <Link
                                                key={am.menuName + 'subLink' + index}
                                                onClick={() => toggleDashNav()}
                                                to={"/Admin/" + am.menuName + amM0.link}>{amM0.ph}
                                            </Link>)
                                        }
                                    </section>
                                </div>)
                            }
                        </>;
                    }
                })()
            }
            <Link onClick={() => toggleDashNav()} to=""><i className="mdi mdi-account"></i>Mon Profil</Link>
            <Link onClick={(event) => {
                event.preventDefault();
                logout()
            }} to="#"><i className="mdi mdi-logout"></i>Se deconnectez</Link>
        </section>

    </aside>


}

export const TopDashNav = () => {
    const { authedInfo, userType, logout } = useAuth()
    const { other } = authedInfo;
    const [toggleModal, setToggleModal] = useState(false)
    const modalContent = <>
        <SearchBarForCandidateOrEmployerUser props={{ typeSearchBar: userType.toLowerCase() }} />
    </>

    return <nav className="dashTopNav">
        <>
            <div className="dashTopNav-toggler">
                <i className="mdi mdi-menu" onClick={() => toggleDashNav()}></i>
            </div>

            <div className="dashTopNav-user">
                <section className="du-notifications">
                    <i className="mdi mdi-bell-outline" onClick={(event) => toggleOptionsNav(event)}></i>
                    <div className="du-options">
                        <span>Nofitication 1</span>
                        <span>Nofitication 2</span>
                        <span>Nofitication 3</span>
                    </div>
                </section>
                <section className="du-search">
                    <i className="mdi mdi-magnify" onClick={() => setToggleModal(true)}></i>
                    {toggleModal ? <Modal props={{ content: modalContent, setToggleModal }} /> : ''}
                </section>
                <section className="du-userInfo">
                    <img src={other[dispatchUserPic(userType)]}
                        className="rounded"
                        alt="Aside Nav Profil pic"
                        onClick={(event) => toggleOptionsNav(event)} />

                    <div className="du-options">
                        <Link to="">Mon profil</Link>
                        <Link to="">Modifier profil</Link>
                        <Link to="#" onClick={(event) => {
                            event.preventDefault();
                            logout()
                        }}>Deconnexion</Link>
                    </div>
                </section>
            </div>
        </>


    </nav>
}

const SearchBarForCandidateOrEmployerUser = ({ props }) => {
    const { typeSearchBar } = props;

    const tabs = [
        {
            title1: 'Rechercher des employeur avec le poste ou la localisation',
            title2: 'Rechercher des employeurs avec leur nom',
            typeSearchBar, label1: 'Poste', label2: 'Localisation', label3: 'Nom de l\'entreprise', ph: 'AaZz',
            selectFormData1: ['Comptable', 'Community Manager', 'Commercial', 'Avocat', 'Consultant'],
            selectFormData2: ['Cotonou', 'Abomey-Calavi', 'Parakou', 'Bohicon', 'Consultant']
        },
        {
            title1: 'Rechercher des candidat(e)s avec le niveau ou domaine de competence',
            title2: 'Rechercher des candidat(e)s avec leurs noms,prenoms ou pseudos',
            typeSearchBar, label1: 'Compétence', label2: 'Niveau d\'etude', label3: 'Pseudo,Nom ou Prenom du candidat', ph: 'AaZz',
            selectFormData1: ['Marketing', 'Ressource humaine', 'Finance et/ou Comptabilité', 'Informatique', 'Environnement'],
            selectFormData2: ['Bac', 'Bac + 1', 'Bac + 2 ou BTS', 'Bac + 3 ou License', 'Master', 'Doctorat']
        }];

    const dispatchSearchForm = (userType) => {
        if (userType === 'Candidat') {
            return tabs[0];
        } else if (userType === 'Recruteur') {
            return tabs[1];
        }
        else if (userType == 'VIP') {
            return <p>Formulaire Vip en cours de creation ...</p>;
        }
        else {
            return <p>Ty d'utilisateur Inconnu</p>;
        }
    }
    const [searchFormData, setSFD] = useState(dispatchSearchForm(typeSearchBar));

    return <>{
        typeof searchFormData === 'object' ? <>
            <h4>{searchFormData.title1}</h4>
            <form>
                <div className="formSegment">
                    <label>{searchFormData.label1}</label>
                    <select>
                        <option>Choisir</option>
                        {
                            searchFormData.selectFormData1.map((opt, index) => <option key={'ss1' + index}>
                                {opt}
                            </option>)
                        }
                    </select>
                </div>
                <div className="formSegment">
                    <label>{searchFormData.label2}</label>
                    <select>
                        <option>Choisir</option>
                        {
                            searchFormData.selectFormData2.map((opt, index) => <option key={'ss1' + index}>
                                {opt}
                            </option>)
                        }
                    </select>
                </div>
                <div className="formBtn">
                    <button>Rechercher</button>
                </div>
            </form>

            <h4>{searchFormData.title2}</h4>
            <form>
                <div className="formSegment" id="fsSearchCandidateOrEntrepriseName">
                    <label>{searchFormData.label3}</label>
                    <input type='search' placeholder="Nom d'entreprise" />
                </div>
                <div className="formBtn">
                    <button>Rechercher</button>
                </div>
            </form>
        </> : <p>
            Type d'utilisateur inconnus
        </p>

    } </>
}

const OfferLinks = ({ props }) => {
    const { className, id } = props
    return <div className={className} id={id}>
        <Link to="/GDA-Offre/Emplois">Emplois</Link>
        <Link to="/GDA-Offre/Immobilier/Location">Immobilier(Location) </Link>
        <Link to="/GDA-Offre/Immobilier/Achat">Immobilier(Achat)</Link>
        <Link to="/GDA-Offre/Boutique">Boutique</Link>
    </div>
}