import '../Assets/styles/gda.css'
import { Link } from "react-router-dom";
import { HomeCard, ProductCard } from "../GlobalComponents/Card";
import { IllustrationImage } from "../GlobalComponents/Img";
import { ProductImage } from "../GlobalComponents/Img";
import Slider from "react-slick";

const GlobalOfferPub = () => {
    const settings = {
        dots: false,
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
    };
    return <div className="go-pubBanner">
        <Slider>
            {[0, 0, 0, 0, 0].map((pub, index) => <section key={"Publicity " + index}
                className="go-pB-item">
                <ProductImage props={{ src: '1.png', alt: 'Le produit' }} />
                <span>Promo: <b>-50%</b> </span>
                <div>
                    <h3>Nom de l'item</h3>
                    <p>Petite description rapide de l'item</p>
                    <Link to="">Contactez le vendeur</Link>
                </div>
            </section>)}
        </Slider>
    </div>
}


export const GlobalOfferLayout = ({ props }) => {
    const { typeOffer, filterFormComponent, toggleFilterSidebar } = props;


    return <div className="globalOfferLayout">
        <GDAOfferBanner props={{ typeOffer: props.typeOffer }} />
        {
            (() => {
                if (typeOffer != "Emplois") {
                    return <><GlobalOfferPub />
                        <SearchBar />
                        <section className="gol-mobileFilterBtn">
                            <button className="semiRounded"
                                onClick={(event) => toggleFilterSidebar(event)}>Filtrer les resultats</button>
                        </section>
                        <section className="gol-filterANDcards">
                            <aside className="filterSidebar">
                                <h3>Filtrer les resultats</h3>
                                {filterFormComponent}
                            </aside>
                            <FilterResult props={{ typeOffer }} />
                        </section>
                    </>
                } else {
                    return <section className='notAccessible'>
                        <p>Pour acceder aux offres d'emploi veuillez vous inscrire ou vous connecter </p>
                        <div>
                            <Link to='/Authentification/Connexion'>Connexion</Link>
                            <Link to='/Authentification/Inscription'>Inscription</Link>
                        </div>
                    </section>
                }
            })()
        }
    </div>
}


const FilterResult = ({ props }) => {
    const { typeOffer } = props;
    return <div className="gol-fAc-cards">
        <section className="gol-fAc-c-header">
            <span>20 resultats trouvé(e)s </span>
            <select className="semiRounded">
                <option>Trier Par</option>
                <option>1</option>
                <option>2</option>
            </select>
        </section>

        <section className="gol-fAc-c-cardList">
            {
                [0, 0, 0, 0, 0, 0].map((card, index) => typeOffer == "Boutique" ?
                    <ProductCard key={'card' + index} /> :
                    <HomeCard />)
            }
        </section>
    </div>
}

const SearchBar = () => {
    return <section className="gol-searchBar">
        <input type="search" placeholder="Recherchez..." />
        <button><i className="mdi mdi-magnify"></i></button>
    </section>
}

const GDAOfferBanner = ({ props }) => {
    const { typeOffer } = props
    const typeOfferCut = typeOffer.split('&')
    const banner = 'banners/' + typeOfferCut[0].toLowerCase() + '.svg';
    return <div className="offerBanner">
        <section>
            <h1>Global-{typeOfferCut[0]}</h1>
            <p>
                {(() => {
                    if (typeOffer == 'Emplois') {
                        return <>
                            Retrouver ici la liste des offres d'emploi posté sur notre plateforme.
                        </>
                    } else if (typeOffer == 'Immobilier') {
                        return <>
                            Retrouver ici quelques annonces immobilières aussi bien des parcelles en vente
                            que des appartements ou chambres a louer.
                        </>
                    }
                })()}
            </p>
        </section>
        <IllustrationImage props={{ src: banner, alt: 'Hus e vs' }} />
    </div>
}
