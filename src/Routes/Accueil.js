import '../Assets/styles/accueil.css'
import { AccueilBanner, Partenaires, TypeServices } from '../RoutesSubComponents/AccueilComponents';

const Accueil = () => {
    return <>
        <AccueilBanner />
        <Partenaires />
        <TypeServices />
    </>
}

export default Accueil;