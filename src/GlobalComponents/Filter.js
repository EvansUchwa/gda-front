import { useState } from "react";
import { Modal } from "./Modal";

const filterForCandidate = <>
    <div className="jobOfferFilter">
        <h2>Filtrer les jobs</h2>
        <form>
            <div className="formSegment">
                <label>Poste</label>
                <input type="text" placeholder="Poste Recherché" />
            </div>
            <div className="formSegment">
                <label>Niveau d'etude</label>
                <select >
                    <option value=''>CEP</option>
                    <option>BEPC</option>
                    <option>BAC</option>
                    <option>BAC + 1</option>
                    <option>ETc...</option>
                </select>
            </div>
            <div className="formSegment">
                <label>Type de contrat</label>
                <select >
                    <option>Stage</option>
                    <option>CDI</option>
                    <option>CDD</option>
                </select>
            </div>
            <div className="formSegment">
                <label>Ville</label>
                <select >
                    <option value=''>Cotonou</option>
                    <option>Bohicon</option>
                    <option>ABomey-Calavi</option>
                    <option>ETc...</option>
                </select>
            </div>
            <div className="formSegment">
                <label>Domaine de Competence</label>
                <input type="number" placeholder="Salaire recherché en CFA" />
            </div>
        </form>
    </div>
</>

const filterForEmployer = <>
    <div className="jobOfferFilter">
        <h2>Filtrer les candidats</h2>
        <form>
            <div className="formSegment">
                <label>Niveau d'etude</label>
                <select >
                    <option value=''>CEP</option>
                    <option>BEPC</option>
                    <option>BAC</option>
                    <option>BAC + 1</option>
                    <option>ETc...</option>
                </select>
            </div>
            <div className="formSegment">
                <label>Domaine de Competence</label>
                <select >
                    <option value=''>Environnement</option>
                    <option>Consulting</option>
                    <option>ETc...</option>
                </select>
            </div>
            <div className="formSegment">
                <label>Experiences dans le domaine</label>
                <select >
                    <option value=''>6 mois</option>
                    <option>1 ans</option>
                    <option>2 ans</option>
                    <option>5 ans</option>
                    <option>+5 ans</option>
                </select>
            </div>
        </form>
    </div>
</>
export const CandidateOrEmployerFilter = ({ props }) => {
    const { userType } = props;
    const [toggleModal, setToggleModal] = useState(false)
    const modalContent = userType === 'Candidat' ? filterForCandidate : filterForEmployer;

    return <div className="filterResults">
        <section>
            <select className="semiRounded">
                <option value=''>Trier ...</option>
                <option>De A a Z</option>
                <option>De Z a Z</option>
                <option>De Moins recent a Plus recent</option>
                <option>De Plus recent a Moins recent</option>
            </select>
        </section>

        <section>
            <button className="semiRounded" onClick={() => setToggleModal(true)}>Filtrer</button>
        </section>

        {
            toggleModal ? <Modal props={{ content: modalContent, setToggleModal }} /> : ''
        }
    </div>
}