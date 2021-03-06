import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ProfilImage, SimpleImage, UrlImage } from './Img';
import { Modal } from './Modal';



export const JobCard = ({ props }) => {

    const { adresse, date_cloture, description, domaine_competence,
        id, nbre_view,
        niveau_etude, post, type_contrat, mission } = props.job;
    const { setToggleModal, setModalInfoId } = props

    return <div className="card1" >
        <div className="card1-head">
            <b>{type_contrat + ' ' + post}</b>
            <span><i className='mdi mdi-map-marker-circle'></i> {adresse}</span>
        </div>

        <div className="card1-body">
            <p>{mission ? mission : description}</p>
            <p>
                <span><i className='mdi mdi-eye'></i> {nbre_view}</span>
                <span><i className='mdi mdi-school'></i> {niveau_etude}</span>

            </p>
        </div>

        <div className="card1-foot">
            <Link to='#' onClick={(event) => {
                event.preventDefault()
                setModalInfoId(id)
                setToggleModal(true)
            }}>Voir plus  </Link>
        </div>

    </div>
}

export const CandidateCard = ({ props }) => {
    const { id, code_cvtheque, nom, prenom,
        poste_envisager, photo1_url,
        competences } = props.candidatInfo;
    const { setToggleModal, setModalId } = props
    const [toggleModal2, setToggleModal2] = useState(false);

    const modal2Content = <div className='contactBtnList'>
        <h2>Contacter par :</h2>
        <a href="mailto:contact@gda-services.com" target='_blank' className='googleColor'>Gmail</a>
        <a href="#" target='_blank' className='telColor'>Appel</a>
        <a href="https://wa.me/22994326044" target='_blank' className=' whatsappColor'>Whatsapp</a>
    </div>
    return <div className="card2" >
        <div className="card2-head">
            {
                photo1_url != 'https://www.gda-services.com/public/candidats/image/'
                    ?
                    <UrlImage props={{
                        src: photo1_url,
                        alt: 'Candidate card pic' + code_cvtheque,
                        className: 'rounded'
                    }} />
                    :
                    <ProfilImage props={{
                        src: 'defaultUserPic.png',
                        alt: 'Default candidate card pic' + code_cvtheque,
                        className: 'rounded'
                    }} />
            }

        </div>

        <div className="card2-body">
            <b>{nom + ' ' + prenom}</b>
            <p>{poste_envisager}</p>
            <span>
                {competences}
            </span>
        </div>

        <div className="card2-foot">
            <Link to='#' onClick={(event) => {
                event.preventDefault()
                setModalId(id)
                setToggleModal(true)
            }}>Aper??u  </Link>
            <Link to='#' onClick={(event) => {
                event.preventDefault()
                setToggleModal2(true)
            }}>Contacter </Link>
        </div>

        {
            toggleModal2 ?
                <Modal props={{ content: modal2Content, setToggleModal: setToggleModal2 }} />
                : ''
        }
    </div>
}

export const ProductCard = ({ props }) => {
    return <div className="card4">

        <section className='card4-absolute-top'>
            2 heure
        </section>
        <section className='card4-absolute-bottom rounded'>
            <i className='mdi mdi-heart'></i>
        </section>

        <section className="card4-header">
            <SimpleImage props={{ src: 'randoms/randomProduct.jpg', alt: 'Product Image' }} />
        </section>

        <section className="card4-body">
            <p>Produit 1</p>
            <b>10000 cfa</b>
            <span><i className="mdi mdi-google-maps"></i> Godomey</span>
        </section>
    </div>
}


export const HomeCard = () => {
    return <div className='card5'>
        <section className='card5-head'>
            <SimpleImage props={{ src: 'randoms/randomHome.jpg', alt: 'Product Image' }} />
        </section>
        <section className="card5-body">
            <div className='card5-b-title'>
                <p>Maison Titre</p>
                <span><i className="mdi mdi-google-maps"></i> Godomey</span>
            </div>
            {/* <div className='card5-b-divider-2'>
                <span>Hectare :<br /> <b>2</b> </span>
                <span>Titre foncier :<br /> <b>Oui</b> </span>
            </div> */}
            <div className='card5-b-divider-3'>
                <p><span>Chambre</span> <p>2</p> </p>
                <p><span>Sanitaire</span> <p>Oui</p> </p>
                <p><span>Avance</span><p>2 mois</p> </p>
            </div>
        </section>
        <section className="card5-foot">
            <Link to="">Voir la propri??t??</Link>
        </section>
    </div>
}