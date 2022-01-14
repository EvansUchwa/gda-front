export const toggleFormBtnClickable = (formFieldsIsValid, btnAnimation = null) => {
    if (formFieldsIsValid == true) {
        return <button
            onClick={(event) => btnAnimation(event)}>Suivant</button>
    } else {
        return <button disabled className="btnDisabled">Suivant</button>
    }

}

export const dispatchInputOrSelect = (formValueObj, setFormValueObj, field, handleChange, errors, setErrors) => {
    const removeImg = (name) => {
        setFormValueObj({ ...formValueObj, [name]: '' })
    }


    return <>
        {
            (() => {
                if (field.comp === 'input' && field.htmlType != 'file') {
                    return <input placeholder='Hey' type={field.htmlType}
                        name={field.name} value={formValueObj[field.name]}
                        onChange={(event) => handleChange(event,
                            formValueObj, setFormValueObj,
                            errors, setErrors)}
                        errmsgname={field.errmsgname}
                        placeholder={"Ex: " + field.ph}
                        autoComplete="off"
                    />
                } else if (field.comp === 'select') {
                    return <select defaultValue={formValueObj[field.name]}
                        name={field.name}
                        onChange={(event) => handleChange(event,
                            formValueObj, setFormValueObj,
                            errors, setErrors)}
                        errmsgname={field.errmsgname}>
                        <option value="">Choisir...</option>
                        {
                            field.options.map((sop, index) => <option
                                key={'option' + index + field.name}>
                                {sop.ph ? sop.ph : sop}
                            </option>)
                        }
                    </select>
                } else if (field.comp === 'textarea') {
                    return <textarea placeholder='Message'
                        name={field.name} errmsgname={field.errmsgname}
                        onChange={(event) => handleChange(event,
                            formValueObj, setFormValueObj,
                            errors, setErrors)}
                    >{formValueObj[field.name]}</textarea>
                }
                else if (field.comp === 'input' && field.htmlType == 'file') {
                    return <>
                        <label htmlFor={field.id} className='iconUploader'>
                            <i className='mdi mdi-file-upload-outline'></i>
                            <span>Cliquez ici pour uploader l'image</span>
                            <input placeholder='Hey' type='file'
                                name={field.name}
                                onChange={(event) => handleChange(event,
                                    formValueObj, setFormValueObj,
                                    errors, setErrors)}
                                errmsgname={field.errmsgname}
                                id={field.id}
                            />
                        </label>
                        <div className='previewImg'>
                            {
                                formValueObj[field.name] != ''
                                    ? <>
                                        <i className='mdi mdi-close'
                                            onClick={() => removeImg(field.name)}></i>
                                        <img id={field.name + '-preview'} alt="Image uploaded preview" />
                                    </>
                                    : ''
                            }
                        </div>
                    </>
                }
            })()
        }
    </>
}

export const dispatchBtn = (type, content) => {
    const btns = {
        simple: <button className='semiRounded'>{content}</button>,
        onLoad: <button className='semiRounded'>{content}
            <i className='mdi mdi-spin mdi-loading'></i></button>,
        disable: <button className='semiRounded formBtnDisable' disabled >{content}</button>,
        disableAndLoad: <button className='semiRounded formBtnDisable' disabled >{content}
            <i className='mdi mdi-spin mdi-loading'></i>
        </button>

    }

    return btns[type]
}



export const getError = (fieldName, errors) => {
    const errorList = errors.filter(item => item.name == fieldName);
    if (errorList.length > 0) {
        return errorList.map(err => <b className="errorField"
            key={err.type}>{err.error}</b>)
    }
}

export const getSuccess = (fieldName, success) => {
    const successList = success.filter(item => item.name == fieldName);
    if (successList.length > 0) {
        return successList.map(scs => <b className="successField"
            key={scs.type}>{scs.success}</b>)
    }
}

export const isValidLenght = (errors, setErrors, charName, char, minLength, maxLength, charMsgTitle) => {
    const copyErrs = errors.slice();
    const errorMsg = 'Erreur: ' + charMsgTitle + ' doit contenir entre ' + minLength + ' et ' + maxLength + ' charactère';
    const errExist = copyErrs.filter(err => err.name == charName && err.type == 'charLength');

    if (char.length < minLength || char.length > maxLength) {
        let newError = { name: charName, error: errorMsg, type: 'charLength' }
        if (errExist.length == 0) {
            setErrors([...copyErrs, newError])
        }
    }
    else {
        for (let i = 0; i < copyErrs.length; i++) {
            if (copyErrs[i].name == charName && copyErrs[i].type == 'charLength') {
                copyErrs.splice(i, 1)
                return setErrors(copyErrs)
            }
        }

    }
}

export const isValidNumberValue = (errors, setErrors, charName, char, minValue, maxValue, charMsgTitle, unit) => {
    const copyErrs = errors.slice();
    const errorMsg = 'Erreur: ' + charMsgTitle + ' doit etre entre ' + minValue + ' et ' + maxValue + ' ' + unit;
    const errExist = copyErrs.filter(err => err.name == charName && err.type == 'charLength');

    if (char < minValue || char > maxValue) {
        let newError = { name: charName, error: errorMsg, type: 'charLength' }
        if (errExist.length == 0) {
            setErrors([...copyErrs, newError])
        }
    }
    else {
        for (let i = 0; i < copyErrs.length; i++) {
            if (copyErrs[i].name == charName && copyErrs[i].type == 'charLength') {
                copyErrs.splice(i, 1)
                return setErrors(copyErrs)
            }
        }

    }
}

export const isValidChar = (validationType, errors, setErrors, charName, char, charMsgTitle, charConfirm = null) => {
    const copyErrs = errors.slice();
    let regex = null;
    let errorMsg = null;

    if (validationType == 'isNumeric') {
        regex = /^[0-9]+$/.test(char);
        errorMsg = 'Erreur: ' + charMsgTitle + ' doit etre au format numerique';
    }
    else if (validationType == 'isAlpha') {
        regex = /^[A-Za-zÀ-ÖØ-öø-ÿ]+$/.test(char);
        errorMsg = 'Erreur: ' + charMsgTitle + ' doit etre au format alphabetique';
    }
    else if (validationType == 'isAlphaWithSpace') {
        regex = /^[a-zA-Z-À-ÖØ-öø-ÿ ]+$/.test(char);
        errorMsg = 'Erreur: ' + charMsgTitle + ' doit etre au format alphabetique';
    }
    else if (validationType == 'isAlphaNumeric') {
        regex = /^[a-zA-Z-0-9À-ÖØ-öø-ÿ]+$/.test(char);
        errorMsg = 'Erreur: ' + charMsgTitle + ' doit etre au format alpha-numerique';
    }
    else if (validationType == 'isMail') {
        regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(char);
        errorMsg = 'Erreur: ' + charMsgTitle + ' format du mail incorrect';
    }
    else if (validationType == 'isPassword') {
        regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,}$/.test(char);
        errorMsg = 'Erreur: ' + charMsgTitle + ' doit contenir au moins ' +
            '1 majuscule,1 miniscule,1 caractère special,1 chiffre';
    }
    else if (validationType == 'isPasswordConfirm') {
        regex = char === charConfirm;
        errorMsg = 'Erreur: ' + charMsgTitle + ' ne correspondent pas';
    }

    const errExist = copyErrs.filter(err => err.name == charName && err.type == validationType);
    if (regex == false) {
        let newError = { name: charName, error: errorMsg, type: validationType }
        if (errExist.length == 0) {
            setErrors([...copyErrs, newError])
        }
    }
    else {
        for (let i = 0; i < copyErrs.length; i++) {
            if (copyErrs[i].name == charName && copyErrs[i].type == validationType) {
                copyErrs.splice(i, 1)
                return setErrors(copyErrs)
            }
        }
    }
}

