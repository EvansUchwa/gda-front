import { useState } from 'react';
import { CandidateCard } from '../GlobalComponents/Card';
import { Modal } from '../GlobalComponents/Modal';

import { ProfilDetailModal } from '../GlobalComponents/SiteModal';


export const CandidatesList = ({ props }) => {
    const [toggleModal, setToggleModal] = useState(false);
    const { candidats } = props
    const [modalId, setModalId] = useState()

    return <div className="ppc-published-items">
        <div className='ppc-title'>
            <h3>Les candidat(e)s les mieux noté(e) </h3>
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