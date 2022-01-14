import { Reveal } from 'react-reveal'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import { Typewriter } from 'react-simple-typewriter'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useAuth } from '../hooks/authHooks'
import { UrlImage } from '../GlobalComponents/Img'
import { SimpleIconLoader } from '../GlobalComponents/Loader'

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
            <h1>En quelques clics seulement trouvez: {' '}<br />
                <span>
                    <Typewriter
                        words={['Le Travail ou le Job de vos rêves',
                            'Le Personnel qu\'il vous faut',
                            'Une Oppotunité d\'affaire']}
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
                    <p>Publiez une offre et trouvez le profil dont vous avez besoin .</p>
                    <Link to="/Authentification/Inscription/entreprise">S'inscrire</Link>
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
                    <h2>Vous êtes à la recherche d'emploi ?</h2>
                    <p>Déposez votre CV et décrochez votre prochain emploi .</p>
                    <Link to='/Authentification/Inscription/candidat'>S'inscrire</Link>
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
    const { apiInfos } = useAuth();
    const { baseApi, headerApi } = apiInfos;
    const [partenaires, setPartenaires] = useState([])


    useEffect(() => {
        axios.get(baseApi + "/api/entreprise/list-entreprise", { headers: headerApi })
            .then(res => {
                console.log(res.data)
                setPartenaires(res.data.data)
            })
            .catch(err => console.log(err))

    }, [])
    return <div className='nosPartenaires'>

        <h2> Nos partenaires </h2>
        <section className='nosPartenaires-liste'>
            <Slider {...settings}>
                {
                    partenaires.length ?
                        partenaires.map((ptn, index) => <div key={'partenaire pic' + index} className='npl-item'>
                            <UrlImage props={{ src: ptn.logo_url, alt: 'Partenaire img' + index }} />
                            {/* <p>{ptn.nom + ptn.id} </p> */}
                            {/* <Link to="">Consulter</Link> */}
                        </div>)
                        : <div>
                            <SimpleIconLoader />
                        </div>
                }
            </Slider>
        </section>
    </div>
}