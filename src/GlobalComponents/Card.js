import { Link } from 'react-router-dom';
import { SimpleImage } from './Img';
export const JobCard = ({ props }) => {
    const { jobId, jobAutor, jobAutorImg, jobType, localisation, likes, views } = props;
    return <div className="card1" >
        <div className="card1-head">
            <img className='rounded' alt={'Image of mostViewed Job N' + jobId}
                src={require('../Assets/images/illustrations/contact.svg').default} />
        </div>

        <div className="card1-body">
            <b>{jobAutor}</b>
            <p>{jobType}</p>
            <p>
                <span>{likes} <i className='mdi mdi-heart'></i> </span>
                <span>{views} <i className='mdi mdi-eye'></i> </span>
            </p>
        </div>

        <div className="card1-foot">
            <Link to=''>Consulter</Link>
        </div>

    </div>
}

export const CandidateCard = ({ props }) => {
    const { setToggleModal, candidateId, candidateFirstName, candidateLastName, candidateSkill,
        candidateDescription } = props;

    return <div className="card2" >
        <div className="card2-head">
            <img className='rounded' alt={'Image of latest Job N' + candidateId}
                src={require('../Assets/images/illustrations/contact.svg').default} />
        </div>

        <div className="card2-body">
            <b>{candidateFirstName + ' ' + candidateLastName}</b>
            <p>{candidateSkill}</p>
            <span>
                {candidateDescription}
            </span>
        </div>

        <div className="card2-foot">
            <Link to='#' onClick={() => setToggleModal(true)}>Profil  </Link>
            <Link to='#'>Contacter </Link>
        </div>

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
            <Link to="">Voir la propriété</Link>
        </section>
    </div>
}