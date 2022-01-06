import { useAuth } from '../hooks/authHooks'
import { Link } from 'react-router-dom';

export const Error = () => {
    const { authed } = useAuth();
    return <div className="errorPage">
        <img alt='Error 404 Page'
            src={require('../Assets/images/illustrations/404.svg').default} />
        <h1>Cette page est inacessible </h1>
        <Link to={authed ? "/Dashboad" : "/"}>Revenir {authed ? 'au Dashboad' : ' a l\'Accueil'} </Link>
    </div>
}