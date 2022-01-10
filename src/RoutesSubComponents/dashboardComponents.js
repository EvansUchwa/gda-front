import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { ProfilImage, SimpleImage, UrlImage } from "../GlobalComponents/Img"
import Pulse from 'react-reveal/Pulse';
import { useAuth } from "../hooks/authHooks";
import axios from 'axios'

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
        <h1>Hello {name}</h1>
        <section className="dwb-candidate">
            {dispatchDashHelloAction()}
        </section>
    </div>
}


export const DashboardFastLinks = ({ props }) => {
    const { userType } = props
    return <div className="dash-fastLinks">
        {(() => {
            if (['entreprise', 'candidat', 'admin'].includes(userType)) {
                return <>
                    <h2>{userType == 'entreprise' ? 'Les profiles de candidats' : 'Les offres'} </h2>
                    <OfferAndCandidatePreviewSection props={{ offerType: 'latest', userType }} />
                    <OfferAndCandidatePreviewSection props={{ offerType: 'mostViewed', userType }} />
                    <OfferAndCandidatePreviewSection props={{ offerType: 'suggestion', userType }} />
                </>
            }
        })()}
    </div>
}

export const DashboardStats = ({ props }) => {
    const { userType } = props

    const statsObj = {
        ENTREPRISE: [
            { number: 3, title: 'Offres postés', icon: "mdi-book" },
        ],
        CANDIDAT: [
            { number: 'Non definis', title: 'Autres Statistique', icon: "mdi-book" }
        ],
        ADMIN: [
            { number: 8, title: 'Candidats inscrits', icon: "mdi-book" },
            { number: 2, title: 'Entreprises inscrites', icon: "mdi-book" },
            { number: 8, title: 'Boutiques crées', icon: "mdi-shop" },
            { number: 2, title: 'Promoteur Immobilier inscrits', icon: "mdi-home" }
        ]
    }

    return <div className="dash-stats">
        <h2>Statistiques</h2>
        <section className="ds-section">
            <b>10 entreprise <br /> ont visité votre profil </b>
            <i className="mdi mdi-eye"></i>
        </section>
        {
            statsObj[userType].map((st, index) => <section className="ds-section"
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


export const EnterpriseList = () => {
    const { apiInfos } = useAuth();
    const { baseApi, headerApi } = apiInfos;
    const [list, setList] = useState([]);

    useEffect(() => {
        axios.get(baseApi + "/api/entreprise/list-entreprise", { headers: headerApi })
            .then(res => setList(res.data.data))
            .catch(err => console.log(err))
    }, [])
    return <div className="dash-enterpriseList">
        <h2>Liste de nos partenaires</h2>
        <h5>Au moins 10 nouvelles entreprise nous rejoignent chaque mois</h5>
        <ul>
            <li>
                <b>Logo</b>
                <b>Nom</b>
                <b>Secteur</b>
                <b>Action</b>
            </li>
            {
                list.map((item, index) => <li key={"enterprise number" + index}>
                    <section>
                        <UrlImage props={{ src: item.logo_url, alt: 'entreprise ok' }} />
                    </section>

                    <section>
                        <p>{item.nom_entreprise}</p>
                    </section>

                    <section>
                        <p>{item.type}</p>
                    </section>

                    <section>
                        <Link to={"/Profil/entreprise/" + item.id}>Profil</Link>
                    </section>
                </li>)
            }
        </ul>
    </div>
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

