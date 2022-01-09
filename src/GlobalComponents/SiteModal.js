import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UrlImage } from "./Img";
import axios from 'axios';
import { useAuth } from '../hooks/authHooks'
import { handleUserFieldInfoChange } from "../Tools/formFunction";
import { getError } from "../Tools/formValidator";
export const ProfilDetailModal = ({ props }) => {
    const { apiInfos } = useAuth();
    const { modalId, userType } = props
    const [modalData, setModalData] = useState({});
    const [entreprise, setEntreprise] = useState({});
    const detailProfilLink = (userType === 'candidat') ?
        ('entreprise/' + modalData.entreprise_id) : ('candidat/' + modalData.id);
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
                <Link to={"/Profil/" + detailProfilLink}>Voir le profil</Link>
                <h5>OU</h5>
                {
                    (() => {
                        if (userType === 'candidat') {
                            return <b> Deposer son dossier pour ce poste sur:</b>
                        } else {
                            return <b>Ou Contacter l'utilisateur par:</b>
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



export const UpdateInfoModal = ({ props }) => {
    const { userType, apiInfos, authedInfo } = useAuth()
    const { upField, initialData } = props;
    const [userNewInfo, setUserNewInfo] = useState({
        nom: initialData.nom, prenom: initialData.prenom,
        sexe: initialData.sexe, date: initialData.date_naissance, lieu_de_naissance: initialData.lieu,
        poste_envisagé: initialData.poste_envisager, salaire_envisagé: initialData.pretention_salarials,
        numero_1: initialData.tel, numero_2: initialData.tel2,
        niveau_detude: initialData.niveau, filière_serie: initialData.filiere, ecole: initialData.ecole,
        pays: initialData.pays, ville: initialData.adresse, nationalité: initialData.nationality,
        moyen_de_deplacement: initialData.nom, situation_matrimoniale: initialData.situation_matrimonial,
        domaine_de_competence: initialData.competences, autre_competence: initialData.autre_competence,
        photo_1: initialData.photo1_url, photo_2: initialData.photo2_url,

        nom_entreprise: initialData.nom_entreprise, mail_entreprise: initialData.email,
        type_entreprise: initialData.type, logo_entreprise: initialData.logo_url,
        contact_1: initialData.contact, contact_2: initialData.contact2,
        ifu: initialData.ifu, localisation_entreprise: initialData.situation_geographie,
        description_entreprise: initialData.description,

    });
    const [errors, setErrors] = useState([]);
    const removeImg = (name) => {
        setUserNewInfo({ ...userNewInfo, [name]: '' })
    }

    function handleSubmit(event) {
        event.preventDefault();

        const { baseApi, headerApi } = apiInfos
        const formData = new FormData()

        if (userType == 'ENTREPRISE') {
            formData.append("username", authedInfo.general.name)
            formData.append("email", authedInfo.general.email)
            formData.append("email_entrepise", userNewInfo.mail_entreprise)
            formData.append("nom_entreprise", userNewInfo.nom_entreprise)
            formData.append("ifu", userNewInfo.ifu)
            formData.append("contact", userNewInfo.contact_1)
            formData.append("contact2", userNewInfo.contact_2)
            formData.append("type", userNewInfo.type_entreprise)
            formData.append("situation_geographie", userNewInfo.localisation_entreprise)
            formData.append("description", userNewInfo.description_entreprise)
            formData.append("logo", userNewInfo.logo_entreprise)
        } else if (userType == 'CANDIDAT') {
            formData.append("username", authedInfo.general.name)
            formData.append("email", authedInfo.general.email)
            formData.append("nom", userNewInfo.nom)
            formData.append("prenom", userNewInfo.prenom)
            formData.append("sexe", userNewInfo.sexe)
            formData.append("date_naissance", "2020-12-21")
            formData.append("lieu", userNewInfo.lieu_de_naissance)
            formData.append("tel", userNewInfo.numero_1)
            formData.append("tel2", userNewInfo.numero_2)
            formData.append("adresse", userNewInfo.ville)
            formData.append("niveau", userNewInfo.niveau_detude)
            formData.append("situation_matrimonial", userNewInfo.situation_matrimoniale)
            formData.append("filiere", userNewInfo.filière_serie)
            formData.append("ecole", userNewInfo.ecole)
            formData.append("competences", userNewInfo.domaine_de_competence)
            formData.append("autre_competence", userNewInfo.autre_competence)
            formData.append("experience", "Une experience")
            formData.append("poste_envisager", userNewInfo.poste_envisagé)
            formData.append("moyens_de_deplacement", userNewInfo.moyen_de_deplacement)
            formData.append("pretention_salarials", userNewInfo.salaire_envisagé)
            formData.append("pays", userNewInfo.pays)
            formData.append("nationality", userNewInfo.nationalité)
            formData.append("photo1", userNewInfo.photo_1)
            formData.append("photo2", userNewInfo.photo_2)
        }
        axios.post(baseApi + "/api/auth/update/profil/user", formData, { headers: headerApi })
            .then(res => console.log(res))
            .catch(err => console.log(err))

    }

    return <form onSubmit={(event) => handleSubmit(event)}>
        <div className="formSegment">
            <label><b>Modifier votre {upField.label}</b> </label>
            {
                (() => {
                    if (upField.comp === 'input' && upField.htmlType != 'file') {
                        return <input placeholder='Hey' type={upField.htmlType}
                            name={upField.name} value={userNewInfo[upField.name]}
                            onChange={(event) => handleUserFieldInfoChange(event,
                                userNewInfo, setUserNewInfo,
                                errors, setErrors)}
                            errmsgname={upField.errmsgname}
                            placeholder={"Ex: " + upField.ph}
                            autoComplete="off"
                        />
                    } else if (upField.comp === 'select') {
                        return <select defaultValue={userNewInfo[upField.name]}
                            name={upField.name}
                            onChange={(event) => handleUserFieldInfoChange(event,
                                userNewInfo, setUserNewInfo,
                                errors, setErrors)}
                            errmsgname={upField.errmsgname}>
                            <option value="">Choisir...</option>
                            {
                                upField.options.map((sop, index) => <option
                                    key={'option' + index + upField.name}>
                                    {sop.ph}
                                </option>)
                            }
                        </select>
                    } else if (upField.comp === 'textarea') {
                        return <textarea placeholder='Message'
                            name={upField.name} errmsgname={upField.errmsgname}
                            onChange={(event) => handleUserFieldInfoChange(event,
                                userNewInfo, setUserNewInfo,
                                errors, setErrors)}
                        >{userNewInfo[upField.name]}</textarea>
                    }
                    else if (upField.comp === 'input' && upField.htmlType == 'file') {
                        return <>
                            <label htmlFor={upField.id} className='iconUploader'>
                                <i className='mdi mdi-file-upload-outline'></i>
                                <span>Cliquez ici pour uploader l'image</span>
                                <input placeholder='Hey' type='file'
                                    name={upField.name}
                                    onChange={(event) => handleUserFieldInfoChange(event,
                                        userNewInfo, setUserNewInfo,
                                        errors, setErrors)}
                                    errmsgname={upField.errmsgname}
                                    id={upField.id}
                                />
                            </label>
                            <div className='previewImg'>
                                {
                                    userNewInfo[upField.name] != ''
                                        ? <>
                                            <i className='mdi mdi-close'
                                                onClick={() => removeImg(upField.name)}></i>
                                            <img id={upField.name + '-preview'} alt="Image uploaded preview" />
                                        </>
                                        : ''
                                }
                            </div>
                        </>
                    }
                })()
            }
        </div>
        {getError(upField.name, errors)}
        <div className="formBtn">
            {
                userNewInfo[upField.name] != '' && errors.length === 0 ?
                    <button>Sauvegarder</button> :
                    <button className="formBtnDisable">Sauvegarder</button>
            }
        </div>
    </form>
}