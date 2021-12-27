import { addJobFormFields, addJobFormValidator } from "../RawData/addJobForm"
import { useState } from "react";

const validForm = (userType, offerInfo, errors) => {
    var cond = false;
    // if (userType == 'Recruteur') {

    // }
    cond = addJobFormValidator(offerInfo);

    if (cond && errors.length == 0) {
        return <button className='semiRounded'>Ajouter l'offre</button>
    } else {
        return <button disabled className='formBtnDisable semiRounded'>Non</button>
    }
}
export const AddOfferForm = ({ props }) => {
    const { userType } = props
    const formFields = addJobFormFields;
    const [offerInfo, setOfferInfo] = useState(
        {
            date_de_cloture: '', adresse: '',
            type_de_contrat: '', niveau_detude: '',
            moyen_de_deplacement: '', poste: '', salaire: '',
            domaine_de_competence: '', description: ''
        });
    const [errors, setError] = useState([])

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        const errMsgName = event.target.attributes['errmsgname'].value;

        setOfferInfo({ ...offerInfo, [name]: value })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert('Poste Ajouter')

    }

    return <div className="addOfferForm" id="addJobForm">
        <h1>Ajouter une nouvelle offre d'emplois</h1>
        <form>
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
    </div>
}