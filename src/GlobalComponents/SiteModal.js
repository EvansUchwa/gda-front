import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UrlImage } from "./Img";
import axios from 'axios';
import { useAuth } from '../hooks/authHooks'
export const ProfilDetailModal = ({ props }) => {
    const { apiInfos } = useAuth();
    const { modalId, userType } = props
    const [modalData, setModalData] = useState({});
    const [entreprise, setEntreprise] = useState({});

    useEffect(() => {
        const { baseApi, headerApi } = apiInfos;
        let apiComplete = ''
        if (userType == 'candidat') {
            apiComplete = '/api/offres/show-offre/'
        } else {
            apiComplete = "/api/candidats/show-candidat/"
        }
        axios.get(baseApi + apiComplete + modalId,
            { headers: headerApi })
            .then(res => {
                console.log(res.data)
                setModalData(res.data)
                if (userType == 'candidat') {
                    setEntreprise(res.data.entreprises)
                }
            })
            .catch(err => console.log(err))
    }, [])
    const { code_cvtheque,
        nom, prenom, sexe, lieu, adresse, pays,
        situation_matrimonial, moyens_de_deplacement,
        niveau, filiere,
        photo1_url, nationality,
        autre_competence, competences,
        poste_envisager, pretention_salarials,

        date_cloture, domaine_competence,
        id, moyen_deplacement,
        niveau_etude, post, salaire, type_contrat,
        mission, profil, poste_apouvoir
    } = modalData;


    const infosTabObj = {
        entreprise: {
            tab1: [
                { key: 'Nom', value: nom },
                { key: 'Prenom', value: prenom },
                { key: 'Sexe', value: sexe },
                { key: 'Age', value: 'Nom' },
                { key: 'Pays', value: pays },
                { key: 'Lieu de Naissance', value: lieu },
                { key: 'Ville de Residence', value: adresse },
                { key: 'Nationalité', value: nationality },
                { key: 'Situation Matrimonial', value: situation_matrimonial },
                { key: 'Moyen de deplacement', value: moyens_de_deplacement },
            ],
            tab2: [
                { key: 'Niveau', value: niveau },
                { key: 'Ecole', value: 'Nom' },
                { key: 'Filiere de formatin', value: filiere },
                { key: 'Autre', value: 'Nom' },
            ],
            tab3: [
                { key: 'Competence general', value: competences },
                { key: 'Experience', value: 'Nom' },
                { key: 'Autre Competence', value: autre_competence },
            ],

            tab4: [
                { key: 'Poste envisagé', value: poste_envisager },
                { key: 'Salaire envisagé', value: pretention_salarials },
            ]
        },

        candidat: {
            tab1: [
                { key: 'Cloture', value: date_cloture },
                { key: 'Poste', value: post },
                { key: 'Nombre de Poste', value: poste_apouvoir },
                { key: 'Salaire', value: salaire },
                { key: 'Type de contrat', value: type_contrat },
                { key: 'Lieu', value: adresse },
                { key: 'Moyen de deplacement', value: moyen_deplacement },
            ],
            tab2: [
                { key: 'Niveau', value: niveau_etude },
                { key: 'Domaine', value: domaine_competence },
                { key: 'Mission', value: mission },
                { key: 'Profil', value: profil },
            ],
            tab3: [
                { key: 'Nom de l\'entreprise', value: entreprise.nom_entreprise },
                { key: 'Ify de l\'entreprise', value: entreprise.ifu },
                { key: 'Description', value: entreprise.description },
                // { key: 'Logo Entreprise', value: entreprise.logo_url },
            ],
        }
    }

    const detailSwitcherTabs = {
        candidat: [
            { label: 'General', value: 1 },
            { label: 'Exigeance', value: 2 },
            { label: 'Entreprise', value: 3 }],
        entreprise: [
            { label: 'General', value: 1 },
            { label: 'Scolarité', value: 2 },
            { label: 'Competence', value: 3 },
            { label: 'Pretention', value: 4 },]
    }
    const [currentTab, setCurrentTab] = useState(1);

    const handleRadioClick = (event) => {
        const value = event.target.value;
        setCurrentTab(value)
    }

    return <div className='mdpBody'>
        <section className='mdpb-imageAndContact'>
            <UrlImage props={{
                src: photo1_url ? photo1_url : entreprise.logo_url,
                alt: 'User detail modal'
            }} />
            <div>
                {
                    (() => {
                        if (userType === 'candidat') {
                            return <b> Deposer son dossier pour ce poste sur:</b>
                        } else {
                            return <b>Contacter l'utilisateur par:</b>
                        }
                    })()
                }
                <Link to="" className='googleColor'>Gmail</Link>
                <Link to="" className='telColor'> Sms</Link>
                <Link to="" className=' whatsappColor'> Whatsapp</Link>
            </div>
        </section>
        <section className='mdpb-switcher'>
            {
                detailSwitcherTabs[userType].map((dst, index) => <label
                    key={"mdpb-s-lab" + index}
                    htmlFor={"mdpb-s" + index}>
                    <input type='radio' id={"mdpb-s" + index}
                        name='mdpb-s' value={dst.value}
                        onClick={(event) => handleRadioClick(event)}
                        checked={currentTab == (dst.value) ? true : false} />
                    <span>{dst.label}</span>
                </label>)
            }
        </section>
        <section className='mdpb-result'>
            <div className='mdpb-r-C1'>

                <section className='mdpb-infosTextList'>
                    {
                        infosTabObj[userType]['tab' + currentTab].map((info, index) => <div
                            key={'mdpb-iTl' + index}>
                            <span>{info.key}</span>
                            <i className="mdi mdi-arrow-right"></i>
                            <b>{info.value}</b>
                        </div>)
                    }
                </section>
            </div>
        </section>

    </div>
}



