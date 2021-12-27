import { Link } from "react-router-dom"

export const Footer = () => {
    return <footer>
        <section className="footer-description">
            <img src={require('../Assets/images/logo.png').default} />
            <p>
                Global Digital Agency est une société de mise en relation
                entre les employeur et les personnes a la recherche d'emploi...
            </p>
        </section>

        <section className="footer-usefulLinks">
            <h4>Liens utile</h4>
            <Link to="/">Accueil</Link>
            <Link to="/">A propos</Link>
            <Link to="/">Contact</Link>
            <Link to="/">Qui somme nous</Link>
        </section>

        <section className="footer-faq">
            <h4>FAQ</h4>
            <Link to="/">Qui somme nous ?</Link>
            <Link to="/">Comment ca marche</Link>
            <Link to="/">C'est gratuit?</Link>
        </section>

        <section className="footer-socialLinks">
            <h4>Nous contactez</h4>
            <div><i className="mdi mdi-phone"> </i> + 299 0000000</div>
            <div><i className="mdi mdi-gmail"></i> gda@gmail.com</div>
            <div>
                <Link to="/"><i className="mdi mdi-facebook"></i></Link>
                <Link to="/"><i className="mdi mdi-linkedin"></i></Link>
                <Link to="/"><i className="mdi mdi-whatsapp"></i></Link>
            </div>
        </section>

        <section className="footer-foot">
            <p>
                Copyright ©2021 Tous droits réservés | Global Digital Agency by Young corporation
            </p>
        </section>
    </footer>
}
{/* <img src={require('../Assets/images/logo3.png').default} /> */ }