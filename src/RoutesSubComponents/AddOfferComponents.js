import { addJobFormFields, addJobFormValidator } from "../RawData/addJobForm"
import { useState } from "react";
import { useAuth } from '../hooks/authHooks';
import axios from 'axios';
import { Modal } from "../GlobalComponents/Modal";
import { IllustrationImage } from "../GlobalComponents/Img"
import { Link } from 'react-router-dom';

const validForm = (userType, offerInfo, errors) => {
    var cond = false;
    cond = addJobFormValidator(offerInfo);

    if (cond && errors.length == 0) {
        return <button className='semiRounded'>Ajouter l'offre</button>
    } else {
        return <button disabled className='formBtnDisable semiRounded'>Non</button>
    }
}
export const AddOfferForm = ({ props }) => {
    const { userId, userType, apiInfos } = useAuth();
    const [toggleModal, setToggleModal] = useState(false);
    const formFields = addJobFormFields;
    const [offerInfo, setOfferInfo] = useState(
        {
            date_de_cloture: '', adresse: '',
            type_de_contrat: '', niveau_detude: '',
            moyen_de_deplacement: '', poste: '', salaire: '',
            domaine_de_competence: '', mission: '',
            profil: '', poste_a_pourvoir: '',
        });
    const [errors, setError] = useState([])

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        const errMsgName = event.target.attributes['errmsgname'].value;

        setOfferInfo({ ...offerInfo, [name]: value })
    }

    const handleSubmit = (event) => {
        const { baseApi, headerApi } = apiInfos
        event.preventDefault();
        axios.post(baseApi + "/api/offres/store-offres", {
            "post": offerInfo.poste,
            "adresse": offerInfo.adresse,
            "moyen_deplacement": offerInfo.moyen_de_deplacement,
            'mission': offerInfo.mission,
            'profil': offerInfo.profil,
            'niveau_etude': offerInfo.niveau_detude,
            'salaire': offerInfo.type_de_contrat,
            'type_contrat': offerInfo.type_de_contrat,
            'domaine_competence': offerInfo.domaine_de_competence,
            'date_cloture': offerInfo.date_de_cloture,
            'entreprise_id': userId,
            'poste_apouvoir': offerInfo.poste_a_pourvoir

        },
            { headers: headerApi })
            .then(res => {
                if (res.data === 'object' && res.data.post) {
                    setToggleModal(true);
                } else {
                    alert('Une erreur sest produite,veuillez reesayez')
                }
            })
            .catch(err => console.log(err))
    }

    const addModal = <div className="offerAddedMsg">
        <IllustrationImage props={{
            src: 'modal/added.svg',
            alt: 'Modal added image'
        }} />
        <p>Votre offre d'emplois a bien été ajouté !!!</p>
        <Link to="#">Cliquez ici pour voir</Link>
    </div>

    return <div className="addOfferForm" id="addJobForm">
        <h1>Ajouter une nouvelle offre d'emplois</h1>
        <form onSubmit={(event) => handleSubmit(event)}>
            {
                formFields.map((fF, index) => <div key={'add-job-field' + index}
                    className="formSegment" id={fF.id}>
                    <label>{fF.label} </label>
                    {
                        (() => {
                            if (fF.comp === 'input' && fF.htmlType != 'file') {
                                return <input placeholder='Hey' type={fF.htmlType}
                                    name={fF.name} value={offerInfo[fF.name]}
                                    onChange={(event) => handleChange(event)}
                                    errmsgname={fF.errmsgname}
                                    placeholder={"Ex: " + fF.ph}
                                />
                            } else if (fF.comp === 'select') {
                                return <select defaultValue={offerInfo[fF.name]}
                                    name={fF.name}
                                    onChange={(event) => handleChange(event)}
                                    errmsgname={fF.errmsgname}>
                                    <option value="">Choisir...</option>
                                    {
                                        fF.options.map((sop, index) => <option
                                            key={'option' + index + fF.name}>
                                            {sop.ph}
                                        </option>)
                                    }
                                </select>
                            } else if (fF.comp === 'textarea') {
                                return <textarea placeholder='Message'
                                    name={fF.name} errmsgname={fF.errmsgname}
                                    onChange={(event) => handleChange(event)}
                                ></textarea>
                            }

                        })()
                    }
                </div>)
            }
            <div className="formBtn">
                {validForm(userType, offerInfo, errors)}
            </div>
        </form>
        {
            toggleModal ?
                <Modal props={{
                    content: addModal, setToggleModal, className: ''
                }} />
                : ''
        }
    </div>
}