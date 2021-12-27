import '../Assets/styles/finalisation.css'
import React, { useContext } from "react"
import { UserContext } from "../Contexts/userContext"
import {
    WaitForDashboardRedirect
} from '../GlobalComponents/Steps.js'
import { Stepper } from '../RoutesSubComponents/FinaliserInscriptionComponents';
import { StepForm } from '../RoutesSubComponents/FinaliserInscriptionComponents';
import { useState } from 'react';
import { IllustrationImage } from '../GlobalComponents/Img';

const FinaliserInscription = () => {

    const [currentStep, setCurrentStep] = useState(1);
    const context = useContext(UserContext);
    const { userType } = context.userInfo;

    return <div className="finaliseSign">
        <section>
            <h1>Finalisation de votre compte</h1>
            <IllustrationImage props={{ src: 'step1.svg', alt: 'Ok bomer' }} />
        </section>
        {
            currentStep <= 3 ?
                <section>
                    <h2>Etape {currentStep}</h2>
                    {
                        ['Candidat', 'Recruteur', 'Vip'].includes(userType)
                            ?
                            <>
                                <Stepper props={{ currentStep, userType }} />
                                <StepForm props={{ currentStep, setCurrentStep, userType }} />
                            </>
                            : <i className='mdi mdi-spin mdi-loading'></i>
                    }
                </section>
                : <WaitForDashboardRedirect />
        }
    </div>
}

export default FinaliserInscription;