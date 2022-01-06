import { useEffect, useState } from 'react';
import '../Assets/styles/auth.css';
import { AuthConnexion } from '../RoutesSubComponents/ConnexionComponents';
import { AuthInscription } from '../RoutesSubComponents/InscriptionComponents';
import { useParams } from 'react-router-dom';
import { Fade } from 'react-reveal';


const Auth = () => {
    const urlParams = useParams();
    const { typeAuth } = urlParams
    const getAuthView = () => {
        if (typeAuth === 'Connexion') {
            setAuthView({ title: 'Connectez vous', component: <AuthConnexion /> })
        } else if (['Inscription', 'Inscription/candidat', 'Inscription/entreprise'].includes(typeAuth)) {
            let role = ''
            if (urlParams.typeAccount) {
                role = urlParams.typeAccount
            }
            setAuthView({
                title: "Inscrivez vous",
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
            <Fade left>
                <div className="apf-img">
                    <img alt={'Authentication simple Banner'}
                        src={require('../Assets/images/illustrations/register2.svg').default} />
                </div>
            </Fade>

            <Fade right>
                <div className="apf-form">
                    <h2>{authView.title}</h2>
                    {
                        authView.component
                    }
                </div>
            </Fade>
        </div>
    </div>
}

export default Auth;