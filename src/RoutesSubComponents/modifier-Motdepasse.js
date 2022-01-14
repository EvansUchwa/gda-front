import { useState } from "react/cjs/react.development";
import { generalUserFields } from "../RawData/fields"
import { dispatchBtn } from "../Tools/formValidator";
import { handleUserFieldInfoChange } from "../Tools/formFunction";
import { useAuth } from "../hooks/authHooks";
import axios from "axios";

export const UpdatePasswordForm = ({ props }) => {
    const { hash } = props
    const { apiInfos } = useAuth();
    const { baseApi, headerApi } = apiInfos;
    const pwdTable = [generalUserFields[2], generalUserFields[3]];
    const [pwds, setPwds] = useState({ password: '', password_confirmation: '' });
    const [btn, setBtn] = useState(dispatchBtn('simple', 'Sauvegarder'));
    const [errors, setErrors] = useState([]);
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const [isPasswordField, setIPF] = useState(true);

    function handleSubmit(event) {
        setBtn(dispatchBtn('disableAndLoad', 'En cours de traitement....'))
        event.preventDefault();

        axios.get(baseApi + "/api/auth/passwords/reset/" + hash, { headers: headerApi })
            .then(res => {
                if (res.data.dataUser) {
                    setBtn(dispatchBtn('disableAndLoad', 'Sauvegarde en cours....'))

                    // axios.post(baseApi + "/api/auth/reset/password/change",
                    //     {
                    //         'email': res.data.dataUser,
                    //         'password': pwds.password
                    //     }, { headers: headerApi })
                    //     .then(res => {
                    //         console.log(res)
                    //         setBtn(dispatchBtn('simple', 'Sauvegarder'))
                    //     })
                    //     .catch(err => console.log(err))
                } else {
                    setError('Demande de changement de mot de passe expiré');
                }
                setBtn(dispatchBtn('simple', 'Sauvegarder'))

            })
            .catch(err => console.log(err))

    }

    return <form onSubmit={(event) => handleSubmit(event)} className="updatePassword">
        {
            pwdTable.map((pwdf, index) => <div className="formSegment" key={'update Pwd field' + index}>
                <label>{pwdf.label} </label>
                <input type={isPasswordField ? pwdf.htmlType : 'text'}
                    placeholder={pwdf.ph}
                    errMsgName={pwdf.errmsgname}
                    name={pwdf.name}
                    // value={pwds[pwdf.name]}
                    onChange={(event) => handleUserFieldInfoChange(event, pwds, setPwds, errors, setErrors)} />
            </div>)
        }
        <span className='errorField'>{error} </span>
        <span className='successField'>{success} </span>
        <div className='formViewPassword'>
            <label htmlFor='viewPassword'>
                <input type="checkbox" id='viewPassword' onChange={() => setIPF(!isPasswordField)} />
                Voir mot de passe
            </label>
        </div>
        <div className="formBtn">
            {pwds.password != '' && pwds.password === pwds.password_confirmation
                ? btn : dispatchBtn('disable', 'Non')
            }
        </div>
    </form>
}