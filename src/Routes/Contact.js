import '../Assets/styles/contact.css';
const Contact = () => {
    return <div className="contact">
        <div className="contactForm">
            <h1>Contactez nous</h1>
            <p>Pour toutes vos questions , precoccupations ou suggestions nous
                mettons à votre disposition ce formulaire de contact</p>
            <form>
                <input placeholder="Mail..." />
                <textarea placeholder="Votre Message..."></textarea>
                <button>Envoyez</button>
            </form>
        </div>

        <div className="contactImg">
            <img alt='ContactBanner'
                src={require('../Assets/images/illustrations/contactUs2.svg').default} />
        </div>
    </div>
}

export default Contact;