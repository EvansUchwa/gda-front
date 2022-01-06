import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Input } from '../GlobalComponents/form';
import { isValidChar, isValidLenght, getError } from '../Tools/formValidator';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { simpleInscriptionFields } from '../RawData/form';
import { useAuth } from '../hooks/authHooks';

export const AuthInscription = ({ props }) => {
    const navigate = useNavigate();
    const { apiInfos } = useAuth();
    const { baseApi, headerApi } = apiInfos
    const [inscriptionFields, setInscriptionFields] = useState({
        role: props.role,
        pseudo: '', mail: '',
        nom: '', prenom: '',
        password: '', password_confirmation: '',
        name: "wilfried",
    })
    const [errors, setErrors] = useState([]);
    const [isPasswordField, setIPF] = useState(true);

    const checkIFIV = () => {
        const { role, pseudo, mail, nom, prenom, password, password_confirmation } = inscriptionFields;
        if (['candidata', 'entreprise', 'apporteur'].includes(role)) {
            if (pseudo !== '' && mail !== '' && password !== ''
                && password_confirmation == password && errors.length === 0) {
                return <button className='semiRounded' type='submit'>S'inscrire</button>
            }
        }
        return <button className='semiRounded formBtnDisable' disabled >S'inscrire</button>;
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        axios.post(baseApi + "/api/auth/register/user", {
            "name": inscriptionFields.pseudo,
            "email": inscriptionFields.mail,
            "password": inscriptionFields.password,
            "password_confirmation": inscriptionFields.password_confirmation,
            "role": inscriptionFields.role.toUpperCase()
        }, { headers: headerApi })
            .then(res => navigate('/Mail/valider-mail', {}))
            .catch(err => console.log(err))

    }

    const handleFieldChange = (event) => {
        const name = event.target.name;
        const value = event.target.value.trim();

        if (name === 'pseudo') {
            isValidLenght(errors, setErrors, name, value, 5, 25, 'Votre pseudo role ')
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
                <option value="apporteur">Un(e) apporteur(se) d'affaire(Parrain) </option>
            </select>
        </section>
        {inscriptionFields.role != '' ?
            simpleInscriptionFields.map((field, index) => <div
                className='formSegment' key={'first step inscription field' + index}>
                <label>{field.label}</label>
                <Input props={{
                    type: field.type,
                    placeholder: field.ph,
                    name: field.name,
                    handleChange: handleFieldChange,
                    isPasswordField: field.iPF ? isPasswordField : false
                }} />
                {getError(field.name, errors)}
            </div>)
            : ''
        }

        <div className='formViewPassword'>
            <label htmlFor='viewPassword'>
                <input type="checkbox" id='viewPassword' onChange={() => setIPF(!isPasswordField)} />
                Voir mot de passe
            </label>
        </div>
        <div className="formBtn">
            {checkIFIV()}
        </div>
        <div className='formOtherAuth'>
            <p>Vous avez deja un compte ? <Link to='/Authentification/Connexion'>Connexion</Link> </p>
        </div>
    </form>
}
