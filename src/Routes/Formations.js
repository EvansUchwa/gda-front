import { Modal } from '../GlobalComponents/Modal';
import '../Assets/styles/services_formations.css';
import { useEffect, useState } from 'react';
import { useAuth } from '../hooks/authHooks'
import axios from 'axios'
const Formations = () => {
    const { apiInfos } = useAuth();
    const { baseApi, headerApi } = apiInfos;
    const [formations, setFormations] = useState([]);
    const [toggleModal, setToggleModal] = useState(false)

    useEffect(() => {
        axios.get(baseApi + '/api/form/formation', { headers: headerApi })
            .then(res => {
                console.log(res)
                setFormations(res.data)
            })
            .catch(err => console.log(err))

    }, [])
    return <div className='formationOrServicePart'>
        <h1>Nos formations</h1>

        <div className='formationList'>
            {
                formations.map((ft, index) => <section key={'formation' + index}
                    className='formation-card'>
                    <h3>{ft.titre}</h3>
                    <p>Ideal pour les jeune bachelier</p>
                    <div className='fc-price'>
                        <span>Inscription: {ft.frais_inscription} Fcfa</span>
                        <p>
                            <b>{ft.prix} </b>
                            <span>cfa/6 mois</span>
                        </p>
                    </div>
                    <button className='semiRounded' onClick={(event) => setToggleModal(true)}
                    >Reservez votre Place</button>
                    <ul>
                        <li >
                            {/* <i className='mdi mdi-check'></i> */}
                            <p>{ft.description}</p>
                        </li>
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