import { useState } from 'react';
import { CandidateCard } from '../GlobalComponents/Card';
import { Modal } from '../GlobalComponents/Modal';
import { ProfilImage } from '../GlobalComponents/Img';
import { Link } from 'react-router-dom';
const faketabs = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];


export const CandidatesList = () => {
    const modalContent = <CandidateProfilDetail />
    const [toggleModal, setToggleModal] = useState(false)
    return <div className="ppc-published-items">
        <div className='ppc-title'>
            <h3>Les candidat(e)s les mieux noté(e) </h3>
        </div>
        <div className='ppc-itemsSlide'>
            {
                faketabs.map((item, index) => <CandidateCard key={'bestCandidate' + index}
                    props={{
                        setToggleModal,
                        jobId: index,
                        candidateFirstName: 'John', candidateLastName: 'Rambo',
                        candidateImg: '',
                        candidateSkill: 'Community Manager',
                        candidateDescription: 'Lorem ipsum dolor ctn Lorem ipsum dolor ctn Lorem ipsum dolor ctn'
                    }} />)
            }
        </div>
        {toggleModal ? <Modal props={{
            content: modalContent, setToggleModal,
            className: "modalDetailProfil"
        }} /> : ''}
    </div>
}


const CandidateProfilDetail = () => {
    const detailSwitcherTabs = [
        { id: 'cORePD-s-Infos', name: 'cORePD-s', value: 1, label: 'Infos' },
        { id: 'cORePD-s-Scolarité', name: 'cORePD-s', value: 2, label: 'Scolarité' },
        { id: 'cORePD-s-Compétence', name: 'cORePD-s', value: 3, label: 'Compétence' },
        { id: 'cORePD-s-Pretention', name: 'cORePD-s', value: 4, label: 'Pretention' }]

    const switchResTabs = [<CPD1 />, <CPD2 />, <CPD3 />, <CPD4 />]
    const [switchRes, setSwitchRes] = useState(0);

    const handleRadioClick = (event) => {
        const value = event.target.value;
        console.log(value)
        setSwitchRes(value - 1)
    }

    return <div className='candidateORemployerProfilDetail'>
        <section className='cORePD-switcher'>
            {
                detailSwitcherTabs.map((dst, index) => <label key={"cORePD-lab" + index}
                    htmlFor={dst.id}>
                    <input type='radio' id={dst.id} name={dst.name} value={dst.value}
                        onClick={(event) => handleRadioClick(event)}
                        checked={switchRes == (dst.value - 1) ? true : false} />
                    <span>{dst.label}</span>
                </label>)
            }
        </section>
        <section className='cORePD-result'>
            {switchResTabs[switchRes]}
        </section>
    </div>
}


const CPD1 = () => {
    return <div className='cORePD-r-C1'>
        <section className=''>
            <ProfilImage props={{ src: "random1.jpg", alt: "Voila" }} />
            <Link to="">Contacter par Gmail</Link>
            <Link to="">Contacter par Sms</Link>
            <Link to="">Contacter par Whatsapp</Link>
        </section>
        <section>
            <div>
                <span>Nom</span>
                <b>John</b>
            </div>
            <div>
                <span>Prenom</span>
                <b>Rambo</b>
            </div>
            <div>
                <span>Sexe</span>
                <b>Homme/femme</b>
            </div>
            <div>
                <span>Age</span>
                <b>20 ans</b>
            </div>
            <div>
                <span>Pays</span>
                <b>Res</b>
            </div>
            <div>
                <span>Nationnalité</span>
                <b>Res</b>
            </div>

            <div>
                <span>Ville de residence</span>
                <b>Res</b>
            </div>
            <div>
                <span>Lieu de naissance</span>
                <b>Res</b>
            </div>
            <div>
                <span>Situation Matrimoniale</span>
                <b>Res</b>
            </div>
            <div>
                <span>Moyen de deplacement</span>
                <b>Oui/Non</b>
            </div>
        </section>
    </div>
}

const CPD2 = () => {
    return <div className='cORePD-r-C2'>
        <section>
            <div>
                <span>Niveau d'etude</span>
                <b>Bac,Bepc etc....</b>
            </div>
            <div>
                <span>Ecole/centre de formation/College/Lycée</span>
                <b>Exemple</b>
            </div>
            <div>
                <span>Filière de formation</span>
                <b>Exemple</b>
            </div>
        </section>
    </div>
}

const CPD3 = () => {
    return <div className='cORePD-r-C3'>
        <section>
            <div>
                <span>Compétence aquise lors de formations</span>
                <b>Competence 1,Competence 2,Etcc....</b>
            </div>
            <div>
                <span>Autre Competence technique ou individuel</span>
                <b>Competence 1,Competence 2,Etcc....</b>
            </div>
            <div>
                <span>Filière de formation</span>
                <b>Exemple</b>
            </div>
        </section>
    </div>
}

const CPD4 = () => {
    return <div className='cORePD-r-C4'>
        <section>
            <div>
                <span>Postulant pour le poste de:</span>
                <b>Ingenieur en ....,Consultant en....</b>
            </div>
            <div>
                <span>Salaire souhaité:</span>
                <b>50k,-de 100 k,+ 100k etc...</b>
            </div>
        </section>
    </div>
}