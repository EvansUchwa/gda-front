import { useState } from "react";
import { Modal } from "../GlobalComponents/Modal";
import { IllustrationImage, UrlImage } from "../GlobalComponents/Img";
import { useAuth } from '../hooks/authHooks'
import axios from 'axios'
import { useEffect } from "react";


const Services = () => {
    const { apiInfos } = useAuth();
    const { baseApi, headerApi } = apiInfos;
    const [toggleModal, setToggleModal] = useState(false)
    const [services, setServices] = useState([])

    useEffect(() => {
        axios.get(baseApi + "/api/serv/service", { headers: headerApi })
            .then(res => {
                console.log(res)
                setServices(res.data)
            })
            .catch(err => console.log(err))

    }, [])
    return <div className="formationOrServicePart">
        <h1>Nos Services</h1>
        <div className="serviceList">
            {
                services.map((sv, index) => <section key={"service-" + index}
                    className="service-card">
                    <div>
                        <UrlImage props={{ src: sv.image_url, alt: 'Image de service' + index }} />
                    </div>
                    <b>{sv.libelle}</b>
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