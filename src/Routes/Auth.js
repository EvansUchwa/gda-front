import { useEffect, useState } from 'react';
import '../Assets/styles/auth.css';
import { AuthConnexion } from '../RoutesSubComponents/connexion';
import { AuthInscription } from '../RoutesSubComponents/inscription';
import { useParams } from 'react-router-dom';
import Pulse from 'react-reveal/Pulse';



const Auth = () => {
    const urlParams = useParams();
    const { typeAuth } = urlParams
    const getAuthView = () => {
        if (typeAuth === 'Connexion') {
            setAuthView({ title: 'Connectez-vous', component: <AuthConnexion /> })
        } else if (['Inscription', 'Inscription/candidat', 'Inscription/entreprise'].includes(typeAuth)) {
            let role = ''
            if (urlParams.typeAccount) {
                role = urlParams.typeAccount
            }
            setAuthView({
                title: "Inscrivez-vous",
                component: <AuthInscription props={{ role }} />
            })
        }
        else {
            console.log(urlParams)
        }
    }
    const [authView, setAuthView] = useState({});

    useEffect(() => getAuthView(), [urlParams])

    return <div className="authPart" >

        <div className='authPart-form'>

            <div className="apf-img">
                <img alt={'Authentication simple Banner'}
                    src={require('../Assets/images/illustrations/register2.svg').default} />
            </div>

            <Pulse >
                <div className="apf-form">
                    <h2>{authView.title}</h2>
                    {
                        authView.component
                    }
                </div>
            </Pulse>
        </div>
    </div>
}

export default Auth;