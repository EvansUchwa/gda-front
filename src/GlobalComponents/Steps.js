import { getError } from '../Tools/formValidator';
import { IllustrationImage } from '../GlobalComponents/Img'
import { useNavigate } from 'react-router-dom';
import { candidateSteps } from '../RawData/stepCandidat';
import { employerSteps } from '../RawData/stepEmployer';

export const CurrentStep = ({ props }) => {
    const { userType, currentStep, handleChange, handleSubmit, errors,
        userOtherInfo, setUserOtherInfo, validForm } = props;
    const removeImg = (name) => {
        setUserOtherInfo({ ...userOtherInfo, [name]: '' })
    }
    const dispatchTypeSteps = (userType) => {
        if (userType == 'Candidat') {
            return candidateSteps;
        } else if (userType == 'Recruteur') {
            return employerSteps
        } else if (userType == 'Vip') {
            return;
        }
    }

    const steps = dispatchTypeSteps(userType);

    return <form onSubmit={(event) => handleSubmit(event, currentStep)}>
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
                                        name={stepField.name} value={userOtherInfo[stepField.name]}
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
    const navigate = useNavigate();
    setTimeout(() => navigate('/Dashboard', {}), 2000)
    return <div className='signFinished'>
        <p>Veuillez patientez pendant que nous finalisons votre compte,vous serez ensuite redirigez sur votre dashboard
            <i className="mdi mdi-spin mdi-loading"></i>
        </p>
        <IllustrationImage props={{ src: 'happy1.svg', alt: 'Happy Sign Img' }} />
    </div>
}
