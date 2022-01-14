import '../Assets/styles/accueil.css'
import { AccueilBanner, Partenaires, TypeServices } from '../RoutesSubComponents/accueil';

const Accueil = () => {
    return <>
        <AccueilBanner />
        <Partenaires />
        <TypeServices />
    </>
}

export default Accueil;