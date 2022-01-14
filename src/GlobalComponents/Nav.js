import { useState } from "react"
import { NotDropableSidebarLink, IsDropableSidebarLink } from "./NavLink";
import { Link, useNavigate } from "react-router-dom"
import { Modal } from "./Modal"
import { SimpleImage, UrlImage } from "./Img";
import { useAuth } from "../hooks/authHooks";

const toggleSideBar = () => {
    document.querySelector('.dashbordNav').classList.toggle('dashbordNav-visible');
    document.querySelector('.dashboardPart').classList.toggle('dashboardPartAlign');
}

const toggleOptionsNav = (event) => {
    if (event.target !== event.currentTarget) {
        return;
    }
    // event.target.nextElementSibling.
    event.target.children[1].classList.toggle('mdi-rotate-90')
    event.target.children[2].classList.toggle('native-options-visible')
    // console.log(event.target.childNodes)
}

function dispatchUserPic(userType) {
    if (userType == 'CANDIDAT') {
        return 'photo1_url'
    } else if (userType == 'ENTREPRISE') {
        return 'logo_url';
    } else {
        return 'profil_url'
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
            <i className="mdi mdi-arrow-left" onClick={() => toggleSideBar()} ></i>
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
            <Link to={"/Dashboard"}><i className="mdi mdi-view-dashboard"></i> Accueil</Link>
            {
                <IsDropableSidebarLink props={{ userType, toggleOptionsNav }} />
            }
            <Link onClick={(event) => {
                event.preventDefault();
                logout()
            }} to="#"><i className="mdi mdi-logout"></i>Se deconnecter</Link>
        </section>

    </aside>


}

export const TopDashNav = () => {
    const { authedInfo, userType, logout } = useAuth()
    const { other } = authedInfo;
    const [toggleModal, setToggleModal] = useState(false)

    return <nav className="dashTopNav">
        <>
            <div className="dashTopNav-toggler">
                <i className="mdi mdi-menu" onClick={() => toggleSideBar()}></i>
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
                {/* <section className="du-search">
                    <i className="mdi mdi-magnify" onClick={() => setToggleModal(true)}></i>
                </section> */}
                <section className="du-userInfo">
                    <img src={other[dispatchUserPic(userType)]}
                        className="rounded"
                        alt="Aside Nav Profil pic"
                        onClick={(event) => toggleOptionsNav(event)} />

                    <div className="du-options">
                        <Link to="/Profil">Mon profil</Link>
                        <Link to="/Modifier/Profil">Modifier profil</Link>
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


const OfferLinks = ({ props }) => {
    const { className, id } = props
    return <div className={className} id={id}>
        <Link to="/GDA-Offre/Emplois">Emplois</Link>
        <Link to="/GDA-Offre/Immobilier/Location">Immobilier (Location) </Link>
        <Link to="/GDA-Offre/Immobilier/Achat">Immobilier (Achat)</Link>
        <Link to="/GDA-Offre/Boutique">Boutique</Link>
    </div>
}