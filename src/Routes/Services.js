import { useState } from "react";
import { Modal } from "../GlobalComponents/Modal";
import { IllustrationImage } from "../GlobalComponents/Img";
const Services = () => {
    const [toggleModal, setToggleModal] = useState(false)
    const servicesTab = [
        {
            img: '1.svg', title: 'Recrutement et placement de personnel'
        },
        {
            img: '2.svg', title: 'La Création et la Refonte de Site Vitrine et E-Commerce'
        },
        {
            img: '3.svg', title: 'Des Prestations de Référencement Naturel (SEO) '
        },
        {
            img: '4.svg', title: 'La Rédaction de Contenus Optimisés SEO (Content Marketing, Inbound Marketing)'
        },
        {
            img: '5.svg', title: 'La Création de Webdesign (UX & UI Design) et' +
                'La Creation de Logo et Identité Visuelle.'
        },
        {
            img: '6.svg', title: 'Du Référencement Payant avec la Création et la Gestion de . Campagne Google AdWords'
        },
        {
            img: '7.svg', title: 'La Création de Page Facebook, Chaînes YouTube, Google+ et ' +
                'l\'Animation des Réseaux Sociaux (Gestion de la Campagne Publicitaire)'
        },

    ]
    return <div className="formationOrServicePart">
        <h1>Nos Services</h1>
        <div className="serviceList">
            {
                servicesTab.map((sv, index) => <section key={"service-" + index}
                    className="service-card">
                    <div>
                        <IllustrationImage props={{ src: 'services/service' + sv.img, alt: 'Img Service ' + index }} />
                    </div>
                    <b>{sv.title}</b>
                    <button className="semiRounded" onClick={() => setToggleModal(true)}>Demandez un Devis</button>
                </section>)
            }
            {
                toggleModal ?
                    <Modal props={{ content: <DevisForm />, setToggleModal }} />
                    : ''
            }
        </div>
    </div>
}



const DevisForm = () => {
    return <form className='reserveFormationPlaceForm'>
        <h2>Veuillez rempir le formulaire ci-dessous: </h2>
        <section className='formSegment'>
            <label>Nom</label>
            <input type="text" placeholder="Ex: AaZz...." />
        </section>
        <section className='formSegment'>
            <label>Prénom</label>
            <input type="text" placeholder="Ex: AaZz...." />
        </section>
        <section className='formSegment'>
            <label>Telephone</label>
            <input type="number" placeholder="Ex: AaZz...." />
        </section>
        <section className='formSegment'>
            <label>Mail</label>
            <input type="mail" placeholder="Ex: AaZz...." />
        </section>
        <section className='formSegment'>
            <label>Une petite description de votre projet</label>
            <textarea placeholder="Ex: AaZz"></textarea>
        </section>
        <div className='formBtn'>
            <button className='semiRounded'>Envoyez</button>
        </div>
    </form>
}

export default Services;