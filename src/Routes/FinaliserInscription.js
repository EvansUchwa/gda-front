import '../Assets/styles/finalisation.css'
import {
    WaitForDashboardRedirect
} from '../GlobalComponents/Steps.js'
import { Stepper, StepForm } from '../RoutesSubComponents/finaliser-Inscription';
import { useState } from 'react';
import { IllustrationImage } from '../GlobalComponents/Img';
import { useAuth } from '../hooks/authHooks';

const FinaliserInscription = () => {
    const { userType } = useAuth()
    const [currentStep, setCurrentStep] = useState(1);

    return <div className="finaliseSign">
        {
            currentStep <= 3 ? <>
                <section>
                    <h1>Finalisation de votre compte</h1>
                    <IllustrationImage props={{ src: 'step1.svg', alt: 'Ok bomer' }} />
                </section>
                <section>
                    <h2>Etape {currentStep}  </h2>
                    {
                        ['candidat', 'entreprise', 'apporteur', 'boutiquier'].includes(userType.toLowerCase())
                            ?
                            <>
                                <Stepper props={{ currentStep }} />
                                <StepForm props={{ currentStep, setCurrentStep, userType: userType.toLowerCase() }} />
                            </>
                            : <p>Une erreur s'est produite ,vous ne pouvez pas aller plus loin</p>
                    }
                </section>
            </>
                : <WaitForDashboardRedirect />
        }
    </div>
}

export default FinaliserInscription;