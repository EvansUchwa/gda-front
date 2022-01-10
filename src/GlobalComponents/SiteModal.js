import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UrlImage } from "./Img";
import axios from 'axios';
import { useAuth } from '../hooks/authHooks'
import { handleUserFieldInfoChange } from "../Tools/formFunction";
import { dispatchBtn, getError } from "../Tools/formValidator";
import { userDetailModalKey } from "../RawData/key";
export const ProfilDetailModal = ({ props }) => {
    const { apiInfos } = useAuth();
    const { modalId, userType } = props
    const [modalData, setModalData] = useState({});

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
                setModalData(res.data)
            })
            .catch(err => console.log(err))
    }, [])


    const detailSwitcherTabs = {
        candidat: [
            { label: 'General', value: 1 },
            { label: 'Exigeance', value: 2 },
        ],
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
    const dispatchModalPic = (userType) => {
        let pic = ''
        if (userType == 'entreprise') {
            pic = modalData.photo1_url
        } else if (userType) {
            const { entreprises } = modalData;
            pic = entreprises ? entreprises.logo_url : '';
        }

        if (pic && pic != 'https://www.gda-services.com/public/candidats/image/'
            && pic != 'https://www.gda-services.com/public/pages/') {
            return pic
        } else {
            return 'https://raw.githubusercontent.com/EvansUchwa/Evans-img/main/defaultUserPic.png'

        }
    }

    return <div className='mdpBody'>
        <section className='mdpb-imageAndContact'>
            {
                modalData ?
                    <UrlImage props={{
                        src: dispatchModalPic(userType),
                        alt: 'User detail modal',
                        className: 'rounded'
                    }} />
                    : ''
            }
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
                <a href="mailto:contact@gda-services.com" target='_blank' className='googleColor'>Gmail</a>
                <a href="#" target='_blank' className='telColor'>Appel</a>
                <a href="https://wa.me/22994326044" target='_blank' className=' whatsappColor'>Whatsapp</a>
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
                        userDetailModalKey[userType]['tab' + currentTab].map((info, index) => <div
                            key={'mdpb-iTl' + index}>
                            <b>{info.title} :</b>
                            {/* <i className="mdi mdi-arrow-right"></i> */}
                            <span>{modalData[info.key]}</span>
                        </div>)
                    }

                </section>
            </div>
        </section>

    </div>
}



export const UpdateInfoModal = ({ props }) => {
    const { userType, apiInfos, authedInfo, updateUserInfo } = useAuth()
    const { upField, initialData, setToggleModal } = props;
    const [formBtn, setFormBtn] = useState(dispatchBtn('simple', 'Sauvegarder'))
    const [userNewInfo, setUserNewInfo] = useState({
        nom: initialData.nom, prenom: initialData.prenom,
        sexe: initialData.sexe, date: initialData.date_naissance, lieu_de_naissance: initialData.lieu,
        poste_envisagé: initialData.poste_envisager, salaire_envisagé: initialData.pretention_salarials,
        numero_1: initialData.tel, numero_2: initialData.tel2,
        niveau_detude: initialData.niveau, filière_serie: initialData.filiere, ecole: initialData.ecole,
        pays: initialData.pays, ville: initialData.adresse, nationalité: initialData.nationality,
        moyen_de_deplacement: initialData.moyens_de_deplacement,
        situation_matrimoniale: initialData.situation_matrimonial,
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
        setFormBtn(dispatchBtn('disable', 'Sauvegarder'))

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
            formData.append("date_naissance", userNewInfo.date)
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
            .then(res => {
                if (res.data) {
                    updateUserInfo(res.data)
                    setToggleModal(false)
                    setFormBtn(dispatchBtn('simple', 'Sauvegarder'))

                }
            })
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
                    formBtn :
                    <button className="formBtnDisable">Sauvegarder</button>
            }
        </div>
    </form>
}