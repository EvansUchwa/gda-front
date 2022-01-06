import { Link } from "react-router-dom"
import { IllustrationImage } from "../GlobalComponents/Img"
export const modalAccountNotActivatedContent = <div className="accountNotActivatedModal">
    <IllustrationImage props={{ src: 'sorry1.svg', alt: 'Soory Illustration' }} />
    <h3>Votre compte n'est pas activé</h3>
    <p>Pour pouvoir beneficier de tt les avantages et de toute les offre de la plateforme,
        vous êtes prié de contacter l'equipe de
        <b> Global Digital Agency </b>
        afin qu'il vous guide dans l'activation de votre compte </p>
    <Link to='/Dashboard'>Revenir au dashboard</Link>
</div>