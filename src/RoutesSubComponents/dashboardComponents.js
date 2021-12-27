import { useState } from "react"
import { Link } from "react-router-dom"
import { ProfilImage } from "../GlobalComponents/Img"
export const DashWelcomeBanner = ({ props }) => {
    const { userType } = props
    const dispatchDashHelloAction = () => {
        if (userType == 'Candidat') {
            return <Link to="">Mettre a jour mon profil</Link>
        } else if (userType == 'Recruteur') {
            return <Link to="/Ajouter-offre">Postez une nouvelle offre</Link>
        } else {
            return <Link to="">Affaires</Link>
        }
    }
    return <div className="dash-welcomeBanner">
        <h2>Hello {userType}</h2>
        <section className="dwb-candidate">
            {dispatchDashHelloAction()}
        </section>
    </div>
}


export const DashboardFastLinks = ({ props }) => {
    const { userType } = props
    return <div className="dash-fastLinks">
        <h2>{userType == 'Recruteur' ? 'Les candidats' : 'Les offres'} </h2>
        <OfferAndCandidatePreviewSection props={{ offerOrCandidateType: 'latest', userType }} />
        <OfferAndCandidatePreviewSection props={{ offerOrCandidateType: 'mostViewed', userType }} />
        <OfferAndCandidatePreviewSection props={{ offerOrCandidateType: 'ok', userType }} />
    </div>
}

export const DashboardStats = ({ props }) => {
    const { userType } = props
    const baseTable = [{ number: 18, title: 'Visites sur votre profile', icon: "mdi-eye" }]
    const dispatchStatType = () => {
        const tabCopy = baseTable;
        if (userType === 'Recruteur') {
            tabCopy.push({ number: 3, title: 'Offres postés', icon: "mdi-book" },
                { number: 8, title: 'Candidatures recus', icon: "mdi-book" });
        }
        else if (userType === 'Candidat') {
            tabCopy.push({ number: 8, title: 'Candidatures deposés', icon: "mdi-book" },
                { number: 2, title: 'Autres Statistique', icon: "mdi-book" })
        }
        else {
            return;
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
    const { offerOrCandidateType, userType } = props
    const dispatchOfferTitle = () => {
        if (offerOrCandidateType === 'latest') {
            return userType == 'Recruteur' ? 'Derniers candidats inscrits' : 'Dernières offres publiés'
        }
        else if (offerOrCandidateType === 'mostViewed') {
            return userType == 'Recruteur' ? 'Profil(candidats) les plus visité(s)' : 'Offres les plus populaire'
        }
        else {
            return userType == 'Recruteur' ? 'Candidats pour vous(recommandés)' : 'Offres pour vous(recommandés)'
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
            to={userType === 'Candidat' ? "/Offres-Emplois/" + offerOrCandidateType
                : "/Candidats/" + offerOrCandidateType}>
            Voir</Link>
    </section>
}