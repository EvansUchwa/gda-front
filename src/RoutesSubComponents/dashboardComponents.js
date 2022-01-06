import { useState } from "react"
import { Link } from "react-router-dom"
import { ProfilImage } from "../GlobalComponents/Img"
import Pulse from 'react-reveal/Pulse';

export const DashWelcomeBanner = ({ props }) => {
    const { userType, name } = props
    const dispatchDashHelloAction = () => {
        if (userType == 'candidat') {
            return <Link to="">Mettre a jour mon profil</Link>
        } else if (userType == 'entreprise') {
            return <Link to="/Ajouter-offre">Postez une nouvelle offre</Link>
        } else {
            return <Link to="">Affaires</Link>
        }
    }
    return <div className="dash-welcomeBanner">
        <h2>Hello {name}</h2>
        <section className="dwb-candidate">
            {dispatchDashHelloAction()}
        </section>
    </div>
}


export const DashboardFastLinks = ({ props }) => {
    const { userType } = props
    return <div className="dash-fastLinks">
        <h2>{userType == 'entreprise' ? 'Les profiles de candidats' : 'Les offres'} </h2>
        <OfferAndCandidatePreviewSection props={{ offerType: 'latest', userType }} />
        <OfferAndCandidatePreviewSection props={{ offerType: 'mostViewed', userType }} />
        <OfferAndCandidatePreviewSection props={{ offerType: 'suggestion', userType }} />
    </div>
}

export const DashboardStats = ({ props }) => {
    const { userType } = props
    const dispatchStatType = () => {
        const tabCopy = [];
        if (['entreprise', 'candidat'].includes(userType)) {
            tabCopy.push({ number: 18, title: 'Visites sur votre profile', icon: "mdi-eye" })
            if (userType === 'entreprise') {
                tabCopy.push({ number: 3, title: 'Offres postés', icon: "mdi-book" },
                    { number: 8, title: 'Candidatures recus', icon: "mdi-book" });
            }
            else if (userType === 'candidat') {
                tabCopy.push({ number: 8, title: 'Candidatures deposés', icon: "mdi-book" },
                    { number: 2, title: 'Autres Statistique', icon: "mdi-book" })
            }
        }
        else if (userType === 'Admin') {
            tabCopy.push({ number: 8, title: 'Candidats inscrits', icon: "mdi-book" },
                { number: 2, title: 'Entreprises inscrites', icon: "mdi-book" },
                { number: 8, title: 'Boutiques crées', icon: "mdi-shop" },
                { number: 2, title: 'Promoteur Immobilier inscrits', icon: "mdi-home" })
        }
        return tabCopy;
    }
    const [statsTab, setStatsTab] = useState(dispatchStatType())
    return <div className="dash-stats">
        <h2>Statistiques</h2>
        {
            statsTab.map((st, index) => <section className="ds-section"
                key={index + 'statType'}>
                <b>{st.number} <br /> {st.title} </b>
                <i className={"mdi " + st.icon}></i>
            </section>)
        }
    </div>
}


const OfferAndCandidatePreviewSection = ({ props }) => {
    const { offerType, userType } = props
    const dispatchOfferTitle = () => {
        if (offerType === 'latest') {
            return userType == 'entreprise' ? 'Derniers candidats inscrits' : 'Dernières offres publiés'
        }
        else if (offerType === 'mostViewed') {
            return userType == 'entreprise' ? 'Profil(candidats) les plus visité(s)' : 'Offres les plus populaire'
        }
        else {
            return userType == 'entreprise' ? 'Candidats pour vous(recommandés)' : 'Offres pour vous(recommandés)'
        }
    }
    return <section className="df-section">
        <b>{dispatchOfferTitle()}</b>
        <div>
            <ProfilImage props={{ src: 'random1.jpg', alt: 'Puto' }} />
            <ProfilImage props={{ src: 'random1.jpg', alt: 'Puto' }} />
            <ProfilImage props={{ src: 'random1.jpg', alt: 'Puto' }} />
        </div>
        <div>
            <span>John</span>,
            <span>John</span>,
            <span>John</span>
        </div>
        <Link
            to={userType === 'candidat' ? "/Offres-Emplois/" + offerType + "/1"
                : "/Candidats/" + offerType + "/1"}>
            Voir</Link>
    </section>
}

export const AccountNotActivated = () => {
    const [toggleModal, setToggleModal] = useState(false);

    return <Pulse forever duration={3000}>
        <div className="accountNotActivated">
            <b>Votre compte n'est pas activer</b>
            <Link to="/Candidats/latest">Detail</Link>
        </div>
    </Pulse>

}

