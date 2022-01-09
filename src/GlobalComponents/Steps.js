import { getError } from '../Tools/formValidator';
import { IllustrationImage } from '../GlobalComponents/Img'
import { candidateSteps } from '../RawData/stepCandidat';
import { employerSteps } from '../RawData/stepEmployer';
import { apporteurSteps } from '../RawData/stepApporteur';
import { boutiquierSteps } from '../RawData/stepBoutiquier';

export const CurrentStep = ({ props }) => {
    const { userType, currentStep, handleChange, handleSubmit, errors,
        userOtherInfo, setUserOtherInfo, validForm } = props;
    const removeImg = (name) => {
        setUserOtherInfo({ ...userOtherInfo, [name]: '' })
    }
    const dispatchTypeSteps = (userType) => {
        if (userType == 'candidat') {
            return candidateSteps;
        } else if (userType == 'entreprise') {
            return employerSteps
        } else if (userType == 'apporteur') {
            return apporteurSteps;
        }
        else if (userType == 'boutiquier') {
            return boutiquierSteps;
        }
    }

    const steps = dispatchTypeSteps(userType);

    return <form encType="multipart/form-data" method='post'
        onSubmit={(event) => handleSubmit(event, currentStep)}>
        {
            steps['step' + currentStep].map((stepField, index) => <div key={"formInput+" + index}
                className='formSegment'>
                <label>{stepField.label} </label>
                {
                    (() => {
                        if (stepField.comp === 'input' && stepField.htmlType != 'file') {
                            return <input placeholder='Hey' type={stepField.htmlType}
                                name={stepField.name} value={userOtherInfo[stepField.name]}
                                onChange={(event) => handleChange(event)}
                                errmsgname={stepField.errmsgname}
                                placeholder={"Ex: " + stepField.ph}
                            />
                        } else if (stepField.comp === 'select') {
                            return <select defaultValue={userOtherInfo[stepField.name]}
                                name={stepField.name}
                                onChange={(event) => handleChange(event)}
                                errmsgname={stepField.errmsgname}>
                                <option value="">Choisir...</option>
                                {
                                    stepField.options.map((sop, index) => <option
                                        key={'option' + index + stepField.name}>
                                        {sop.ph}
                                    </option>)
                                }
                            </select>
                        } else if (stepField.comp === 'textarea') {
                            return <textarea placeholder='Message'
                                name={stepField.name} errmsgname={stepField.errmsgname}
                                onChange={(event) => handleChange(event)}
                            ></textarea>
                        }
                        else if (stepField.comp === 'input' && stepField.htmlType == 'file') {
                            return <>
                                <label htmlFor={stepField.id} className='iconUploader'>
                                    <i className='mdi mdi-file-upload-outline'></i>
                                    <span>Cliquez ici pour uploader l'image</span>
                                    <input placeholder='Hey' type='file'
                                        name={stepField.name}
                                        onChange={(event) => handleChange(event)}
                                        errmsgname={stepField.errmsgname}
                                        id={stepField.id}
                                    />
                                </label>
                                <div className='previewImg'>
                                    {
                                        userOtherInfo[stepField.name] != ''
                                            ? <>
                                                <i className='mdi mdi-close'
                                                    onClick={() => removeImg(stepField.name)}></i>
                                                <img id={stepField.name + '-preview'} alt="Image uploaded preview" />
                                            </>
                                            : ''
                                    }
                                </div>
                            </>
                        }
                    })()
                }
                {getError(stepField.name, errors)}
            </div>)
        }
        <div className="formBtn">
            {validForm(currentStep)}
        </div>
    </form>
}


export const WaitForDashboardRedirect = () => {
    setTimeout(() => {
        window.location = '/';
    }, 5000)
    return <div className='signFinished'>
        <p>Veuillez patientez pendant que nous finalisons votre compte,vous serez redirigez sur votre
            dashboard dans quelque secondes
            <i className="mdi mdi-spin mdi-loading"></i>
        </p>
        <IllustrationImage props={{ src: 'happy1.svg', alt: 'Happy Sign Img' }} />
    </div>
}
