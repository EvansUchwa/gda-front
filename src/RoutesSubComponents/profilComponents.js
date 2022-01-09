import { useEffect, useState } from "react"
import { useAuth } from "../hooks/authHooks";
import { UrlImage } from "../GlobalComponents/Img"
import { SimpleIconLoader } from "../GlobalComponents/Loader";
import { JobCard } from "../GlobalComponents/Card";

export const ProfilLayout = ({ props }) => {
    const { dispatchUserPic, dispatchLocation } = useAuth();
    const { profilT, profilInfo } = props
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
                    profilT === 'ENTREPRISE' ? <ProfilPosts props={{ profilId: 10 }} /> : ''
                }
            </div>
        </div>
    </div>
}



const ProfilHead = ({ props }) => {
    const { dispatchProfilPic, dispatchLocation } = useAuth();
    const { userType, infos } = props
    const profilPic = infos[dispatchProfilPic(userType)];
    // const profilPicCond = profilPic.includes('.jpg') || profilPic.includes('.png')
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
                {/* <span>{profilInfo.nbre_view}</span> */}
            </p>
        </div>
    </>
}

const ProfilOtherInfo = ({ props }) => {
    const { userType, data } = props

    const otherInfosDispatcher = (type, data) => {
        const obj = {
            entreprise: [
                { title: 'Ifu', data: data.ifu },
                { title: 'Telephone 1', data: data.contact },
                { title: 'Telephone 2', data: data.contact2 },
                { title: 'Domaine', data: data.type },
                { title: 'Description', data: data.description },
            ],
            candidat: [
                { title: 'Sexe', data: data.sexe },
                { title: 'Pays', data: data.pays },
                { title: 'Nationalité', data: data.nationality },
                { title: 'Date de naissance', data: data.date_naissance },
                { title: 'Telephone 1', data: data.tel },
                { title: 'Telephone 2', data: data.tel2 },
                { title: 'Niveau', data: data.niveau },
                { title: 'Competence', data: data.competences },
                { title: 'Filiere etudié', data: data.filiere },
                { title: 'Ecole', data: data.ecole },
                { title: 'Moyen de deplacement', data: data.moyens_de_deplacement },
                { title: 'Experience', data: data.experience },
                { title: 'Autre competence', data: data.autre_competence },
            ]
        }

        return obj[type]
    }

    return <ul>
        {
            otherInfosDispatcher(userType, data) ? otherInfosDispatcher(userType, data).map((info, index) => <li key={"profil other info" + index}>
                <b><i className="mdi mdi-heart"></i>  {info.title}</b>
                <p> {[0, '0', null, 'null'].includes(info.data) ? 'Non definis' : info.data}</p>
            </li>)
                : <SimpleIconLoader />

        }
    </ul>
}

export const ProfilPosts = ({ props }) => {
    const { profilId } = props
    const setToggleModal = () => { };
    const setModalInfoId = () => { };

    const obj = {
        adresse: 'kdksdjkd', date_cloture: '09/12/2000',
        description: 'dhhdhd', domaine_competence: 'Domaine de ',
        id: 12, nbre_view: '12', niveau_etude: 'Ok boomer', post: 'Deve Java',
        type_contrat: 'djdjd', mission: 'Votre mission'
    };

    return <>
        <h3>On retrouve ici les offres posté par l'entreprise</h3>
        <div>
            {
                [0, 0, 0, 0].map((post, index) => <JobCard props={{
                    job: obj,
                    setToggleModal,
                    setModalInfoId
                }} />)
            }
        </div>
    </>
}