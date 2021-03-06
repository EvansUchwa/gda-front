import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Input } from '../GlobalComponents/form';
import { isValidChar, isValidLenght, getError } from '../Tools/formValidator';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { generalUserFields } from '../RawData/fields';
import { useAuth } from '../hooks/authHooks';
import { dispatchBtn } from '../Tools/formValidator';

export const AuthInscription = ({ props }) => {
    const btnContent = "S'inscrire"
    const navigate = useNavigate();
    const { apiInfos } = useAuth();
    const { baseApi, headerApi } = apiInfos

    const [errors, setErrors] = useState([]);
    const [error, setError] = useState('');
    const [isPasswordField, setIPF] = useState(true);
    const [formBtn, setFormBtn] = useState(dispatchBtn('simple', btnContent))

    const [inscriptionFields, setInscriptionFields] = useState({
        role: props.role, pseudo: '', mail: '',
        password: '', password_confirmation: '',
    })

    const checkFormValidity = (inscriptionFields) => {
        const { role, pseudo, mail, nom, prenom, password, password_confirmation } = inscriptionFields;
        if (['candidat', 'entreprise', 'apporteur', 'boutiquier'].includes(role)) {
            if (pseudo !== '' && mail !== '' && password !== ''
                && password_confirmation == password && errors.length === 0) {
                return true;
            }
        }
        return false;
    }

    const handleFormSubmit = (event) => {
        setFormBtn(dispatchBtn('onLoad', btnContent))
        event.preventDefault();
        axios.post(baseApi + "/api/auth/register/user", {
            "name": inscriptionFields.pseudo,
            "email": inscriptionFields.mail,
            "password": inscriptionFields.password,
            "password_confirmation": inscriptionFields.password_confirmation,
            "role": inscriptionFields.role.toUpperCase()
        }, { headers: headerApi })
            .then(res => {
                if (res.data === "l'adresse email existe d\u00e9j\u00e0") {
                    setError('Email deja utilis??')
                } else {
                    navigate('/Mail/valider-mail', {})
                }
                setFormBtn(dispatchBtn('simple', btnContent))
            })
            .catch(err => console.log(err))

    }

    const handleFieldChange = (event) => {
        const name = event.target.name;
        const value = event.target.value.trim();

        if (name === 'pseudo') {
            isValidLenght(errors, setErrors, name, value, 5, 25, 'Votre pseudo ')
        }
        else if (['nom', 'prenom'].includes(name)) {
            isValidLenght(errors, setErrors, name, value, 2, 35, 'Votre Nom ou votre Prenom  ')
            isValidChar('isAlpha', errors, setErrors, name, value, 'Votre Nom ou votre Prenom ')
        }
        else if (name === 'mail') {
            isValidChar('isMail', errors, setErrors, name, value, 'Votre mail ')
        }
        else if (name === 'password') {
            isValidChar('isPassword', errors, setErrors, name, value, 'Votre mot de passe ')
        }
        else if (name === 'password_confirmation') {
            isValidChar('isPasswordConfirm', errors, setErrors, name, value,
                'Les mots de passe ', inscriptionFields.password)
        }
        setInscriptionFields({ ...inscriptionFields, [name]: value });
    }


    return <form onSubmit={(event) => handleFormSubmit(event)}>
        <section className="formSegment">
            <label>Je suis ...</label>
            <select name='role' defaultValue={inscriptionFields.role}
                onChange={(event) => handleFieldChange(event)}>
                <option value=''>Choisir....</option>
                <option value="candidat">Un(e) candidat(e)</option>
                <option value="entreprise">Une entreprise</option>
            </select>
        </section>
        {inscriptionFields.role != '' ?
            generalUserFields.map((field, index) => <div
                className='formSegment' key={'first step inscription field' + index}>
                <label>{field.label}</label>
                <Input props={{
                    type: field.htmlType,
                    placeholder: field.ph,
                    name: field.name,
                    handleChange: handleFieldChange,
                    isPasswordField: field.iPF ? isPasswordField : false
                }} />
                {getError(field.name, errors)}
            </div>)
            : ''
        }

        {
            inscriptionFields.role != '' ?
                <div className='formViewPassword'>
                    <label htmlFor='viewPassword'>
                        <input type="checkbox" id='viewPassword' onChange={() => setIPF(!isPasswordField)} />
                        Voir mot de passe
                    </label>
                </div>
                : ''
        }

        <span className='errorField'>{error}</span>
        <div className="formBtn">
            {checkFormValidity(inscriptionFields) ? formBtn : dispatchBtn('disable', btnContent)}
        </div>
        <div className='formOtherAuth'>
            <p>Vous avez dej?? un compte ? <Link to='/Authentification/Connexion'>Connexion</Link> </p>
        </div>
    </form>
}
