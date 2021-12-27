import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Input, Select } from '../GlobalComponents/form';
import { isValidChar, isValidLenght, getError } from '../Tools/formValidator';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const baseApi = 'https://www.gda-services.com';
const headerApi = {
    "Authorization": "3979af088d2327ca3e1303ed4be4c2de",
    "Name": "GDA",
    "Version": "1.0"
}
const sexes = [
    { value: 'Homme', ph: 'Homme' },
    { value: 'Femme', ph: 'Femme' }]


export const AuthInscription = ({ props }) => {
    const navigate = useNavigate();
    const [inscriptionFields, setInscriptionFields] = useState({
        role: props.role,
        pseudo: '', mail: '', sexe: '',
        nom: '', prenom: '',
        password: '', password_confirmation: '',
        name: "wilfried",
        tel: "92562882",
        role: "CANDIDAT",
        email: "wil@gmail.com",
    })
    const [errors, setErrors] = useState([]);
    const [isPasswordField, setIPF] = useState(true);

    const checkIFIV = () => {
        const { role, pseudo, mail, sexe, nom, prenom, password, password_confirmation } = inscriptionFields;
        if (role === 'candidat' || role === 'recruteur') {
            if (pseudo !== '' && mail !== '' && sexe !== '' && password !== ''
                && password_confirmation == password && errors.length === 0) {
                return <button className='semiRounded' type='submit'>S'inscrire</button>
            }
        }
        else if (role === 'vip') {
            if (nom !== '' && mail !== '' && prenom !== '' && password !== ''
                && password_confirmation === password && errors.length === 0) {
                return <button className='semiRounded' type='submit'>S'inscrire</button>
            }
        }
        return <button className='semiRounded formBtnDisable' disabled >S'inscrire</button>;
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        navigate('/Verifier-mail', {})
        axios.post(baseApi + "/api/auth/register/user", {
            "name": inscriptionFields.pseudo,
            "email": inscriptionFields.mail,
            "password": inscriptionFields.password,
            "password_confirmation": inscriptionFields.password_confirmation,
            "role": inscriptionFields.role.toUpperCase()
        }, { headers: headerApi })
            .then(res => console.log(res))
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

    const dispatchOIF = (role) => {
        const { mail, pseudo, sexe, nom, prenom } = inscriptionFields
        if (role == "candidat") {
            return <IsCandidate props={{
                handleFieldChange, errors,
                pseudo, mail, sexe
            }} />
        } else if (role == "recruteur") {
            return <IsEmployeur props={{
                handleFieldChange, errors,
                pseudo, mail, sexe
            }} />
        }
        else if (role == "vip") {
            return <IsVIP props={{
                handleFieldChange, errors,
                nom, prenom, mail
            }} />
        }
    }

    const inputTabs = [
        {
            label: 'Mot de passe', type: 'password', name: 'password', value: '', placeholder: 'MonMotdepasse',
            onchange: true, onclick: false
        },
        {
            label: 'Confirmation ', type: 'password', name: 'password_confirmation', value: '', placeholder: 'MonMotdepasse',
            onchange: true, onclick: false
        },
    ]

    return <form onSubmit={(event) => handleFormSubmit(event)}>
        <section className="formSegment">
            <label>Je suis ...</label>
            <select name='role' defaultValue={inscriptionFields.role}
                onChange={(event) => handleFieldChange(event)}>
                <option value=''>Choisir....</option>
                <option value="candidat">Un(e) candidat(e)</option>
                <option value="recruteur">Un(e) recruteur(se) </option>
                <option value="vip">Un(e) apporteur(se) d'affaire(VIP) </option>
            </select>
        </section>
        {dispatchOIF(inscriptionFields.role)}
        {inputTabs.map((it, index) => <section className='formSegment' key={'inputTab-' + index}>
            <label>{it.label}</label>
            <Input props={{
                type: it.type, name: it.name, value: it.value, placeholder: it.placeholder, id: it.id,
                onChange: it.onchange, onClick: it.onclick, handleChange: handleFieldChange,
                handleClick: null, isPasswordField
            }} />
            {getError(it.name, errors)}
        </section>)}
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


const IsCandidate = ({ props }) => {
    const { pseudo, mail, handleFieldChange, errors } = props;
    const inputTabs = [
        {
            label: 'Pseudo', type: 'text', name: 'pseudo', value: '', placeholder: 'AaZz...',
            onchange: true, onclick: false
        },
        {
            label: 'Mail ', type: 'mail', name: 'mail', value: '', placeholder: 'monMail@gmail.com',
            onchange: true, onclick: false
        },
    ]
    return <>
        {inputTabs.map((it, index) => <section className="formSegment" key={'inputTab-' + index}>
            <label>{it.label}</label>
            <Input props={{
                type: it.type, name: it.name, value: it.value, placeholder: it.placeholder, id: it.id,
                onChange: it.onchange, onClick: it.onclick, handleChange: handleFieldChange,
                handleClick: null
            }} />
            {getError(it.name, errors)}
        </section>)}
        <section className="formSegment">
            <label>Sexe</label>
            <Select props={{
                name: 'sexe', defaultValue: '',
                id: '', options: sexes, onChange: true,
                handleChange: handleFieldChange
            }} />
        </section>
    </>
}

const IsEmployeur = ({ props }) => {
    const { pseudo, mail, handleFieldChange, errors } = props;
    const inputTabs = [
        {
            label: 'Pseudo', type: 'text', name: 'pseudo', value: '', placeholder: 'AaZz...',
            onchange: true, onclick: false
        },
        {
            label: 'Mail(pas celui de l\'entreprise)', type: 'mail', name: 'mail', value: '', placeholder: 'monMail@gmail.com',
            onchange: true, onclick: false
        },
    ]
    const secteurActivités = [
        { value: 'Commerce', ph: 'Commerce' },
        { value: 'Prestation de service', ph: 'Prestation de service' },
        { value: 'Banque et ou Assurance', ph: 'Banque et ou Assurance' }]
    return <>
        {inputTabs.map((it, index) => <section className="formSegment" key={'inputTab-' + index}>
            <label>{it.label}</label>
            <Input props={{
                type: it.type, name: it.name, value: it.value, placeholder: it.placeholder, id: it.id,
                onChange: it.onchange, onClick: it.onclick, handleChange: handleFieldChange,
                handleClick: null
            }} />
            {getError(it.name, errors)}
        </section>)}
        <section className="formSegment" name="sexe"
            onChange={(event) => handleFieldChange(event)}>
            <label>Sexe</label>
            <Select props={{
                name: 'sexe', defaultValue: '',
                id: '', options: sexes, onChange: true,
                handleChange: handleFieldChange
            }} />
        </section>
    </>
}

const IsVIP = ({ props }) => {
    const { pseudo, mail, handleFieldChange, errors } = props;
    const inputTabs = [
        {
            label: 'Nom', type: 'text', name: 'nom', value: '', placeholder: 'AaZz...',
            onchange: true, onclick: false
        },
        {
            label: 'Prenom', type: 'text', name: 'prenom', value: '', placeholder: 'AaZz...',
            onchange: true, onclick: false
        },
        {
            label: 'Mail ', type: 'mail', name: 'mail', value: '', placeholder: 'monMail@gmail.com',
            onchange: true, onclick: false
        },
    ]
    return <>
        {inputTabs.map((it, index) => <section className="formSegment" key={'inputTab-' + index}>
            <label>{it.label}</label>
            <Input props={{
                type: it.type, name: it.name, value: it.value, placeholder: it.placeholder, id: it.id,
                onChange: it.onchange, onClick: it.onclick, handleChange: handleFieldChange,
                handleClick: null
            }} />
            {getError(it.name, errors)}
        </section>)}
    </>
}