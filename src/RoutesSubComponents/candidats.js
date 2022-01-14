import { useState } from 'react';
import { CandidateCard } from '../GlobalComponents/Card';
import { Modal } from '../GlobalComponents/Modal';

import { ProfilDetailModal } from '../GlobalComponents/SiteModal';


export const CandidatesList = ({ props }) => {
    const { jobOffers, type } = props
    const [toggleModal, setToggleModal] = useState(false);
    const { candidats } = props
    const [modalId, setModalId] = useState()

    return <div className="ppc-published-items">
        <div className='ppc-title'>
            {
                (() => {
                    if (type === 'latest') {
                        return <h3>Les derniers candidats inscrits</h3>
                    } else if (type === 'mostViewed') {
                        return <h3>Les candidats les plus populaires</h3>
                    }
                    else if (type === 'suggestion') {
                        return <h3>Les candidats recommandés pour vous</h3>
                    }
                })()
            }
        </div>
        <div className='ppc-itemsSlide'>
            {
                candidats.map((cd, index) => <CandidateCard
                    key={'bestCandidate' + index}
                    props={{
                        setToggleModal, candidatInfo: cd, setModalId
                    }} />)
            }
        </div>
        {toggleModal ? <Modal props={{
            content: <ProfilDetailModal props={{ modalId, userType: 'entreprise' }} />, setToggleModal,
            className: "modalDetailProfil"
        }} /> : ''}
    </div>
}