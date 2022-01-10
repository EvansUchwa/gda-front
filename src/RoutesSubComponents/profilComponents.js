import { useEffect, useState } from "react"
import { useAuth } from "../hooks/authHooks";
import { UrlImage } from "../GlobalComponents/Img"
import { SimpleIconLoader } from "../GlobalComponents/Loader";
import { JobCard } from "../GlobalComponents/Card";
import axios from 'axios'
import { userDataKey } from "../RawData/key";

export const ProfilLayout = ({ props }) => {
    const { dispatchUserPic, dispatchLocation } = useAuth();
    const { profilT, profilInfo, profilId } = props
    return <div className="dashboardPart">
        <div className="dp-profil">
            <div className="profilInfos"
                style={{ width: ['admin', 'CANDIDAT'].includes(profilT) ? '90%' : '30%' }}>
                <div className="pi-general">
                    {
                        profilInfo && profilT ?
                            <ProfilHead props={{ userType: profilT.toLowerCase(), infos: profilInfo }} />
                            : <SimpleIconLoader />
                    }
                </div>
                <div className="pi-other">
                    <ProfilOtherInfo props={{
                        userType: profilT.toLowerCase(),
                        data: profilInfo
                    }} />
                </div>
            </div>
            <div className="profilPost">
                {
                    profilT === 'ENTREPRISE' ? <ProfilPosts props={{ profilId }} /> : ''
                }
            </div>
        </div>
    </div>
}



const ProfilHead = ({ props }) => {
    const { dispatchProfilPic, dispatchLocation } = useAuth();
    const { userType, infos } = props
    const profilPic = infos[dispatchProfilPic(userType)];
    return <>
        {
            <UrlImage props={{
                src: profilPic,
                alt: 'Image entreprise'
            }} />
        }
        {
            (() => {
                if (userType === 'entreprise') {
                    return <>
                        <h2>{infos.nom_entreprise}</h2>
                        <p>
                            <span>Reprensentant de :</span>
                            <b>Nom entreprise</b>
                        </p>
                    </>
                } else {
                    return <>
                        <h2>{infos.nom + ' ' + infos.prenom}</h2>
                        <p>
                            <span>Reprensentant de :</span>
                            <b>Nom entreprise</b>
                        </p>
                    </>
                }
            })()
        }
        <div>
            <p>
                <i className="mdi mdi-map-marker"></i>
                <span>{infos[dispatchLocation(userType)]}</span>
            </p>
            <p>
                <i className="mdi mdi-eye"></i>
                <span>{infos.nbre_view} personne(s) ont visité ce profil </span>
            </p>
        </div>
    </>
}

const ProfilOtherInfo = ({ props }) => {
    const { userType, data } = props
    const [profilOInfo, setProfilOInfo] = useState();
    useEffect(() => {
        setProfilOInfo(userDataKey[userType])
    }, [userType, data])

    return <ul>
        {
            profilOInfo ? profilOInfo.map((info, index) => <li key={"profil other info" + index}>
                <b><i className="mdi mdi-heart"></i>  {info.title}</b>
                <p> {data[info.key]}</p>
            </li>) : <SimpleIconLoader />
        }
    </ul>
}

export const ProfilPosts = ({ props }) => {
    const { apiInfos } = useAuth()
    const { profilId } = props
    const [profilPosts, setProfilPosts] = useState();
    const setToggleModal = () => { };
    const setModalInfoId = () => { };

    const obj = {
        adresse: 'kdksdjkd', date_cloture: '09/12/2000',
        description: 'dhhdhd', domaine_competence: 'Domaine de ',
        id: 12, nbre_view: '12', niveau_etude: 'Ok boomer', post: 'Dev Java',
        type_contrat: 'djdjd', mission: 'Votre mission'
    };

    useEffect(() => {
        const { baseApi, headerApi } = apiInfos;
        axios.get(baseApi + '/api/offres/list-offre-entreprise/' + profilId, { headers: headerApi })
            .then(res => {
                setProfilPosts(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    return <>
        <h3>On retrouve ici les offres posté par l'entreprise</h3>
        <div>
            {
                profilPosts ?
                    profilPosts.length > 0 ?
                        profilPosts.map((post, index) => <JobCard props={{
                            job: post,
                            setToggleModal,
                            setModalInfoId
                        }} key={'ok bommers' + index} />)
                        : 'Aucune offre posté par cette entreprise'
                    : <SimpleIconLoader />
            }
        </div>
    </>
}