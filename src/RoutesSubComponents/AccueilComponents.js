import { Fade, Reveal } from 'react-reveal'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import { Typewriter } from 'react-simple-typewriter'
// import * as THREE from 'three'
// import GLOBE from '../Assets/scripts/vanta.globe.min.js'

export const AccueilBanner = () => {

    const handleType = (count) => {
        console.log(count)
        if (count == 33) {
            console.log('cool travail')
        }
    }
    const handleDone = () => {
        console.log(`Done after 5 loops!`)
    }

    return <div className="accueilBanner" id="kdkdj">
        <section className="accueilBanner-text">
            <h1>En quelque clic seulement trouvez: {' '}<br />
                <span>
                    <Typewriter
                        words={['le travail ou le job de vos rêve',
                            'le personnel qu\'il vous faut',
                            'une oppotunité d\'affaire']}
                        loop={false}
                        cursor
                        cursorStyle='|'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                        onLoopDone={handleDone}
                        onType={handleType}
                    />
                </span>
            </h1>
            <Link to="/Authentification/Inscription" className='semiRounded'>S'inscrire</Link>
        </section>
        <section className='accueilBanner-img'>

        </section>
    </div>
}


export const TypeServices = () => {
    return <div className='accueilTypeServices'>
        <div className='finisher-header'></div>
        <section className='accueilTypeService'>
            <Reveal right duration="5000">
                <img alt='Employeur Account Explain Banner'
                    src={require('../Assets/images/illustrations/employeur2.svg').default} />
            </Reveal>

            <Reveal left duration="5000">
                <div>
                    <h2>Vous êtes un employeur ?</h2>
                    <p>Publiez une offre et trouvez le profil dont vous avez besoin</p>
                    <Link to="/Authentification/Inscription&role=recruteur">S'inscrire</Link>
                </div>
            </Reveal>
        </section>



        <section className='accueilTypeService'>
            <Reveal left duration="5000">
                <img alt='Candidate Account Explain Banner'
                    src={require('../Assets/images/illustrations/worker4.svg').default} />
            </Reveal>
            <Reveal right duration="5000">
                <div>
                    <h2>Vous êtes a la recherche d'emplois ?</h2>
                    <p>Déposez votre CV et décrochez votre prochain emploi</p>
                    <Link to='/Authentification/Inscription&role=candidat'>S'inscrire</Link>
                </div>
            </Reveal>
        </section>
    </div>
}

export const Partenaires = () => {
    const settings = {
        dots: false,
        autoplay: true,
        autoplaySpeed: 4000,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        centerMode: true,
        responsive: [
            {
                breakpoint: 512,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            }
        ]
    };
    const partenaires = [{ id: 1, logo: 'partenaires/', nom: 'Partenaire ' },
    { id: 2, logo: 'partenaires/', nom: 'Partenaire ' },
    { id: 3, logo: 'partenaires/', nom: 'Partenaire ' },
    { id: 4, logo: 'partenaires/', nom: 'Partenaire ' },
    { id: 5, logo: 'partenaires/', nom: 'Partenaire ' },
    { id: 2, logo: 'partenaires/', nom: 'Partenaire ' },
    { id: 3, logo: 'partenaires/', nom: 'Partenaire ' },
    { id: 4, logo: 'partenaires/', nom: 'Partenaire ' },]
    return <div className='nosPartenaires'>
        <hr className='section-divider' />
        {/* <h2> Nos partenaires </h2> */}
        <section className='nosPartenaires-liste'>
            <Slider {...settings}>
                {partenaires.map(ptn => <div key={ptn.id} className='npl-item'>
                    <img alt='All Partenaire'
                        src={require('../Assets/images/' + ptn.logo + '5.png').default} />
                    {/* <p>{ptn.nom + ptn.id} </p> */}
                    {/* <Link to="">Consulter</Link> */}
                </div>
                )}
            </Slider>
        </section>
    </div>
}