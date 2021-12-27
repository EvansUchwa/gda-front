import { Link } from 'react-router-dom';
import { Modal } from '../GlobalComponents/Modal';
import '../Assets/styles/services_formations.css';
import { useState } from 'react';
const Formations = () => {
    const formationTabs = [0, 0, 0, 0];
    const formationInfosTabs = [0, 0, 0, 0, 0, 0];
    const [toggleModal, setToggleModal] = useState(false)
    return <div className='formationOrServicePart'>
        <h1>Nos formations</h1>

        <div className='formationList'>
            {
                formationTabs.map((ft, index) => <section key={'formation' + index}
                    className='formation-card'>
                    <h3>FORMATION EN SECRÉTARIAT BUREAUTIQUE</h3>
                    <p>Ideal pour les jeune bachelier</p>
                    <div className='fc-price'>
                        <span>Inscription: 12000 Fcfa</span>
                        <p>
                            <b>1400000 </b>
                            <span>cfa/6 mois</span>
                        </p>
                    </div>
                    <button className='semiRounded' onClick={(event) => setToggleModal(true)}
                    >Reservez votre Place</button>
                    <ul>
                        {
                            formationInfosTabs.map((fi, index) => <li key={index + '-formation-info'}>
                                <i className='mdi mdi-check'></i>
                                <p>Lorem ipsum dolor caracteristique</p>
                                <span>Lorem ipsum dolor</span>
                            </li>)
                        }
                    </ul>
                </section>)
            }
            {
                toggleModal ?
                    <Modal props={{ content: <SubscriberFormationForm />, setToggleModal }} />
                    : ''
            }
        </div>
    </div>
}


const SubscriberFormationForm = () => {
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
            <label>Mail</label>
            <input type="mail" placeholder="Ex: AaZz...." />
        </section>
        <section className='formSegment'>
            <label>Telephone</label>
            <input type="number" placeholder="Ex: AaZz...." />
        </section>
        <div className='formBtn'>
            <button className='semiRounded'>Envoyez</button>
        </div>
    </form>
}



export default Formations;