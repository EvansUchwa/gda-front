import { handleUserFieldInfoChange } from '../Tools/formFunction';
import { CurrentStep } from '../GlobalComponents/Steps';
import { useState } from 'react'
import { stepBoutiquierValidator, insertBoutiquierDataOnLastStep } from '../RawData/stepBoutiquier';
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

        type_commerce: '', description: ''
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
        else if (userType == 'boutiquier') {
            cond = stepBoutiquierValidator(stepId, userOtherInfo)
        }

        if (cond && errors.length <= 0) {
            return <button className='semiRounded'>Continuer</button>
        } else {
            return <button disabled className='formBtnDisable semiRounded'>Non</button>
        }
    }

    const handleChange = (event) => {
        handleUserFieldInfoChange(event, userOtherInfo, setUserOtherInfo, errors, setErrors)
    }

    const handleSubmit = (event, currentStep) => {
        const mail = authedInfo.general.email;
        const userRankId = authedInfo.general.id;
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
            } else if (userType == 'boutiquier') {
                insertBoutiquierDataOnLastStep(userOtherInfo, userRankId, mail, updateOtherUserInfo, apiInfos)
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
