import '../Assets/styles/mail.css'
import axios from 'axios';
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useAuth } from '../hooks/authHooks';
import { dispatchBtn, getError, getSuccess } from '../Tools/formValidator';

export const MailAction = () => {
    const urlParam = useParams();
    const { mailAction } = urlParam;
    const dispatchMailComponent = (mailActionType) => {
        if (mailActionType == 'lire-mail') {
            return <ReadMailMsg />
        } else if (mailAction == 'valider-mail') {
            return <ValidateMail />
        }
        else if (mailAction == 'rechercher-mail') {
            return <SearchMail />
        }
    }
    return <div className='mailContainer'>
        {dispatchMailComponent(mailAction)}
    </div>
}
const ValidateMail = () => {
    const { apiInfos } = useAuth()
    const simpleBtn = <button className='semiRounded'>Verifier le code</button>;
    const btnDataOnLoad = <button className='semiRounded'>Verifier le code
        <i className='mdi mdi-spin mdi-loading'></i></button>;

    const { baseApi, headerApi } = apiInfos
    const [mailCode, setMailCode] = useState('');
    const [errors, setErrors] = useState([]);
    const [successs, setSuccesss] = useState([])
    const [msgBtn, setMsgBtn] = useState(simpleBtn);
    const handleCodeFormSubmit = (event) => {
        event.preventDefault();
        setMsgBtn(btnDataOnLoad)
        axios.post(baseApi + "/api/auth/verification/mail/user", { "code": mailCode },
            { headers: headerApi })
            .then(res => {
                if (res.data != 'Code iccorret. Veuillez vérifier le code.') {
                    setMsgBtn(<Link to='/Authentification/Connexion'>Connectez vous</Link>)
                    setSuccesss([{ name: 'mailCode', success: 'Mail validé avec succès', type: 'mailCodeSuccess' }])
                } else {
                    setMsgBtn(simpleBtn)
                    setErrors([{ name: 'mailCode', error: res.data, type: 'mailCodeError' }])
                }

            })
            .catch(err => console.log(err))
    }

    const handleCodeFieldChange = (event) => {
        const value = event.target.value;
        setMailCode(value)
        setSuccesss([])
        setErrors([])
    }
    return <section className='mc-validateMailForm'>
        <h1>1 ère phase de l'inscription reussi!<br />
            Veuillez entrez le code secret reçu dans
            votre messagerie mail:</h1>
        <span>
            {getError('mailCode', errors)}
            {getSuccess('mailCode', successs)}
        </span>
        <form onSubmit={(event) => handleCodeFormSubmit(event)}>
            <section className='formSegment'>
                <label><b>Code secret</b></label>
                <input type="number" placeholder="Ex:0000" value={mailCode}
                    onChange={(event) => handleCodeFieldChange(event)} name='mailCode' />
            </section>
            <div className='formBtn'>
                {mailCode != '' ? msgBtn :
                    <button className='formBtnDisable' disabled>Non</button>}
            </div>
        </form>
    </section>

}

const ReadMailMsg = () => {
    return <div className='hasSigned'>
        <img alt='User has signed'
            src={require('../Assets/images/illustrations/mail1.svg').default} />
        <p>Votre inscription a bien été prise en compte <br />
            veuillez verifiez votre messagerie mail pour valider l'inscription</p>
    </div>
}

const SearchMail = () => {
    const { apiInfos } = useAuth()
    const { baseApi, headerApi } = apiInfos;
    const [mail, setMail] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [btn, setBtn] = useState(dispatchBtn('simple', 'Rechercher'))

    function handleChange(event) {
        let value = event.target.value;
        setMail(value)
    }
    function handleSubmit(event) {
        setBtn(dispatchBtn('disableAndLoad', 'Recherche en cours'))
        event.preventDefault();

        axios.post(baseApi + "/api/auth/reset/password/sender", { email: mail }, { headers: headerApi })
            .then(res => {
                if (res.data == "L'adresse email n'est pas inscrit sur cet site. Veuillez bien vérifier l'adresse email!") {
                    setSuccess('')
                    setError(res.data)
                } else {
                    setError('');
                    setSuccess(res.data)
                }
                setBtn(dispatchBtn('simple', 'Rechercher'))

            })
            .catch(err => console.log(err))
    }


    return <div className='search-mail'>
        <h1>Veuillez entrer le mail avec lequel vous avez crée votre compte..</h1>
        <form onSubmit={(event) => handleSubmit(event)}>
            <div className='formSegment'>
                <label>Mail</label>
                <input type="mail" value={mail}
                    placeholder="Ex: mail@....com"
                    onChange={(event) => handleChange(event)} />
            </div>
            <span className='errorField'>{error} </span>
            <span className='successField'>{success} </span>
            <div className='formBtn'>
                {btn}
            </div>
        </form>
    </div>
}

export default MailAction;