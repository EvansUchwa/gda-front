import { Link } from 'react-router-dom';
import { Input } from '../GlobalComponents/form';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../hooks/authHooks';


export const AuthConnexion = () => {
    const navigate = useNavigate();
    const simpleBtn = <button className='semiRounded'>Connexion</button>;
    const btnOnDataLoad = <button className='semiRounded'>Connexion en cours
        <i className='mdi mdi-spin mdi-loading'></i></button>;
    const [formBtn, setFormBtn] = useState(simpleBtn)
    const { apiInfos, login, setUserInfo } = useAuth();
    const { baseApi, headerApi } = apiInfos
    const [connexionFields, setConnexionFields] = useState({
        pseudoORmail: '',
        password: ''
    });
    const checkCFIV = () => {
        const { pseudoORmail, password } = connexionFields;
        if (pseudoORmail !== '' && password !== '') {
            return true
        }
        return false;
    }


    const [connexionFieldsIsValid, setCFIV] = useState(checkCFIV())
    const [isPasswordField, setIPF] = useState(true);
    const [error, setError] = useState(null)

    useEffect(() => { setCFIV(checkCFIV()) }, [connexionFields])

    const handleFieldChange = (event) => {
        const name = event.target.name;
        const value = event.target.value.trim();
        setConnexionFields({ ...connexionFields, [name]: value });
    }

    const handleFormSubmit = (event) => {
        setFormBtn(btnOnDataLoad)
        event.preventDefault();
        axios.post(baseApi + "/api/auth/login", {
            "username": connexionFields.pseudoORmail,
            "password": connexionFields.password,
        }, { headers: headerApi })
            .then(res => {
                console.log(res.data)
                if (res.data === "L'adresse email n'est verifier") {
                    navigate('/Mail/valider-mail')
                }
                else if (res.data == 'Adresse email  ou mot de passe incorrect') {
                    setError(res.data)
                }
                else {
                    // console.log(res.data)
                    setUserInfo({ general: res.data.data, other: res.data.dataOrder })
                    login()
                }
                setFormBtn(simpleBtn)
            })
            .catch(err => console.log(err))

    }

    const inputTabs = [
        {
            label: 'Mail Ou Pseudo', type: 'text', name: 'pseudoORmail',
            value: '', placeholder: 'AaZz ou momMail@gmail.com',
        },
        {
            label: 'Mot de passe', type: 'password', name: 'password',
            value: '', placeholder: 'MonMotdepasse', ipf: true
        },
    ]
    return <form onSubmit={(event) => handleFormSubmit(event)}>
        {inputTabs.map((it, index) => <section className='formSegment' key={'inputTab-' + index}>
            <label>{it.label}</label>
            <Input props={{
                type: it.type, name: it.name,
                placeholder: it.placeholder, id: it.id,
                handleChange: handleFieldChange, isPasswordField
            }} />
        </section>)}
        <div className='formViewPassword'>
            <label htmlFor='viewPassword'>
                <input type="checkbox" id='viewPassword' onChange={() => setIPF(!isPasswordField)} />
                Voir mot de passe
            </label>
        </div>
        <b className="errorField" >{error}</b>
        <div className="formBtn">
            {
                connexionFieldsIsValid ?
                    formBtn
                    :
                    <button className='semiRounded formBtnDisable' disabled >Connexion</button>
            }
        </div>

        <div className='formOtherAuth'>
            <p>Vous n'avez pas de compte ? <Link to='/Authentification/Inscription'>Inscription</Link> </p>
            <p> <Link to='/Mail/rechercher-mail'>Mot de passe oublié ?</Link> </p>
        </div>
    </form>
}