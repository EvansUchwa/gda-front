import { isValidChar, isValidLenght, isValidNumberValue } from '../Tools/formValidator';
import { CurrentStep } from '../GlobalComponents/Steps';
import { useState } from 'react'
import { stepApporteurValidator, insertApporteurDataOnLastStep } from '../RawData/stepApporteur';
import { stepCandidateValidator, insertCandidateDataOnLastStep } from '../RawData/stepCandidat';
import { stepEmployerValidator, insertEntrepriseDataOnLastStep } from '../RawData/stepEmployer';
import { useAuth } from '../hooks/authHooks';

export const Stepper = ({ props }) => {
    const { currentStep, setUserInfo } = props
    const dispatchNumberSteps = () => {
        return [0, 1, 2]
    }

    const steps = dispatchNumberSteps();

    return <section className='stepper'>
        {
            steps.map((stp, index) => <span
                className={(currentStep - 1) >= index ? 'rounded activeStep' : 'rounded'}
                key={index + 'step'}>{index + 1}</span>)
        }
    </section>
}

export const StepForm = ({ props }) => {
    const { currentStep, setCurrentStep, userType } = props;
    const { authedInfo, updateOtherUserInfo, apiInfos } = useAuth();

    const [errors, setErrors] = useState([]);
    const [userOtherInfo, setUserOtherInfo] = useState({
        nom: '', prenom: '',
        sexe: '', age: '', lieu_de_naissance: '',
        poste_envisagé: '', salaire_envisagé: '',
        numero_1: '', numero_2: '',
        niveau_detude: '', filière_serie: '', ecole: '',
        pays: '', ville: '', nationalité: '',
        moyen_de_deplacement: '', situation_matrimoniale: '',
        domaine_de_competence: '', autre_competence: '',
        photo_1: '', photo_2: '', profil: '',

        nom_entreprise: '', mail_entreprise: '',
        type_entreprise: '', logo_entreprise: '',
        ifu: '', localisation_entreprise: '',
        description_entreprise: '',
    });
    const validForm = (stepId) => {
        var cond = "";
        ;
        if (userType == 'candidat') {
            cond = stepCandidateValidator(stepId, userOtherInfo)
        } else if (userType == 'entreprise') {
            cond = stepEmployerValidator(stepId, userOtherInfo)
        }
        else if (userType == 'apporteur') {
            cond = stepApporteurValidator(stepId, userOtherInfo)
        }

        if (cond && errors.length <= 0) {
            return <button className='semiRounded'>Continuer</button>
        } else {
            return <button disabled className='formBtnDisable semiRounded'>Non</button>
        }
    }

    const handleChange = (event) => {
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
        if (['logo_entreprise', 'photo_1', 'photo_2'].includes(name)) {
            let file = event.target.files[0];
            if (file) {
                let imgUrl = URL.createObjectURL(file)
                setTimeout(() => {
                    document.getElementById(name + '-preview').src = imgUrl
                }, 500)

                value = file
            }

        }
        setUserOtherInfo({ ...userOtherInfo, [name]: value })
    }

    const handleSubmit = (event, currentStep) => {
        const mail = authedInfo.general.email;
        event.preventDefault();
        if (currentStep == 3) {
            if (userType == 'candidat') {
                insertCandidateDataOnLastStep(userOtherInfo, mail, updateOtherUserInfo, apiInfos)
            }
            else if (userType == 'entreprise') {
                insertEntrepriseDataOnLastStep(userOtherInfo, mail, updateOtherUserInfo, apiInfos)
            }
            else if (userType == 'apporteur') {
                insertApporteurDataOnLastStep(userOtherInfo, mail, updateOtherUserInfo, apiInfos)
            }

        }
        setCurrentStep(currentStep + 1)
    }


    return <div className='finaliseSignStepsForm'>
        <section>
            <CurrentStep props={{
                userType, currentStep, handleChange, handleSubmit, errors,
                userOtherInfo, setUserOtherInfo, validForm
            }} />
        </section>
    </div>
}
