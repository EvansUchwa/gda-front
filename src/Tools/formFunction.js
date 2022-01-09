import { isValidLenght, isValidChar, isValidNumberValue } from "./formValidator";


export const handleUserFieldInfoChange = (event, userInfo, setUserInfo, errors, setErrors) => {
    const name = event.target.name;
    var value = event.target.value;
    const errMsgName = event.target.attributes['errmsgname'].value;

    if (['nom', 'prenom', 'lieu_de_naissance', 'filière_serie', 'ecole', 'nom_entreprise']
        .includes(name)) {
        isValidLenght(errors, setErrors, name, value, 2, 25, 'Votre ' + errMsgName + ' ')
    }
    if (['autre_competence', 'localisation_entreprise', 'description_entreprise']
        .includes(name)) {
        isValidLenght(errors, setErrors, name, value, 20, 50, 'Votre ' + errMsgName + ' ')
    }
    if (name === 'mail_entreprise') {
        isValidChar('isMail', errors, setErrors, name, value, 'Votre ' + errMsgName + ' ')
    }
    if (['nom', 'prenom', 'lieu_de_naissance'].includes(name)) {
        isValidChar('isAlpha', errors, setErrors, name, value, 'Votre ' + errMsgName + ' ')
    }
    if (['filière_serie', 'ecole'].includes(name)) {
        isValidChar('isAlphaNumeric', errors, setErrors, name, value, 'Votre ' + errMsgName + ' ')
    }
    if (['numero_1', 'numero_2', 'salaire_envisagé'].includes(name)) {
        isValidChar('isNumeric', errors, setErrors, name, value, 'Votre ' + errMsgName + ' ')
    }
    if (['numero_1', 'numero_2'].includes(name)) {
        isValidLenght(errors, setErrors, name, value, 8, 8, 'Votre ' + errMsgName + ' ')
    }
    if (['salaire_envisagé'].includes(name)) {
        isValidLenght(errors, setErrors, name, value, 5, 7, 'Votre ' + errMsgName + ' ')
    }
    if (['age',].includes(name)) {
        isValidNumberValue(errors, setErrors, name, value, 15, 40, "l\'age", "ans")
    }
    if (name == 'ifu') {
        isValidLenght(errors, setErrors, name, value, 4, 4, 'Votre ' + errMsgName + ' ')
    }
    if (['logo_entreprise', 'photo_1', 'photo_2', 'profil'].includes(name)) {
        let file = event.target.files[0];
        if (file) {
            let imgUrl = URL.createObjectURL(file)
            setTimeout(() => {
                document.getElementById(name + '-preview').src = imgUrl
            }, 500)

            value = file
        }

    }
    setUserInfo({ ...userInfo, [name]: value })
}