import { Link } from 'react-router-dom';
import { Input } from '../GlobalComponents/form';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../Contexts/userContext';
import { useEffect } from 'react';
import axios from 'axios';

const baseApi = 'https://www.gda-services.com';
const headerApi = {
    "Authorization": "3979af088d2327ca3e1303ed4be4c2de",
    "Name": "GDA",
    "Version": "1.0"
}
export const AuthConnexion = () => {
    const navigate = useNavigate();
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
    const context = useContext(UserContext);
    const setUserIsConnected = context.setUserIsConnected;

    useEffect(() => { setCFIV(checkCFIV()) }, [connexionFields])

    const handleFieldChange = (event) => {
        const name = event.target.name;
        const value = event.target.value.trim();
        setConnexionFields({ ...connexionFields, [name]: value });
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        // axios.post(baseApi + "/api/auth/register/user", {
        //     "username": connexionFields.pseudoORmail,
        //     "password": connexionFields.password,
        // }, { headers: headerApi })
        //     .then(res => console.log(res))
        //     .catch(err => console.log(err))
        setUserIsConnected(true)
        navigate('/Choice')

    }

    const inputTabs = [
        {
            label: 'Mail Ou Pseudo', type: 'text', name: 'pseudoORmail', value: '', placeholder: 'AaZz ou momMail@gmail.com',
            onchange: true, onclick: false
        },
        {
            label: 'Mot de passe', type: 'password', name: 'password', value: '', placeholder: 'MonMotdepasse',
            onchange: true, onclick: false
        },
    ]
    return <form onSubmit={(event) => handleFormSubmit(event)}>
        {inputTabs.map((it, index) => <section className='formSegment' key={'inputTab-' + index}>
            <label>{it.label}</label>
            <Input props={{
                type: it.type, name: it.name, value: it.value, placeholder: it.placeholder, id: it.id,
                onChange: it.onchange, onClick: it.onclick, handleChange: handleFieldChange,
                handleClick: null, isPasswordField
            }} />
        </section>)}
        <div className='formViewPassword'>
            <label htmlFor='viewPassword'>
                <input type="checkbox" id='viewPassword' onChange={() => setIPF(!isPasswordField)} />
                Voir mot de passe
            </label>
        </div>
        <div className="formBtn">
            {
                connexionFieldsIsValid ?
                    <button className='semiRounded' type='submit'>Connexion</button>
                    :
                    <button className='semiRounded formBtnDisable' disabled >Connexion</button>
            }
        </div>
        <div className='formOtherAuth'>
            <p>Vous n'avez pas de compte ? <Link to='/Authentification/Inscription'>Inscription</Link> </p>
        </div>
    </form>
}