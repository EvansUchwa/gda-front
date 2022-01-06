import { useState } from 'react';
import { JobCard } from '../GlobalComponents/Card';
import { Modal } from '../GlobalComponents/Modal';
import { ProfilDetailModal } from '../GlobalComponents/SiteModal';

export const JobsOfferList = ({ props }) => {
    const { jobOffers } = props
    const [modalInfoId, setModalInfoId] = useState();
    const [toggleModal, setToggleModal] = useState(false);
    const offerModal = <ProfilDetailModal props={{
        modalId: modalInfoId,
        userType: 'candidat'
    }} />;
    return <div className="ppc-published-items">
        <div className='ppc-title'>
            <h3>Les offres les plus vues</h3>
        </div>
        <div className='ppc-itemsSlide'>
            {
                jobOffers.map((job, index) => <JobCard
                    key={'MostViewedJob' + index}
                    props={{ job, setToggleModal, setModalInfoId }} />)
            }
        </div>
        {toggleModal ? <Modal props={{
            content: offerModal, setToggleModal,
            className: "modalDetailProfil"
        }} /> : ''}
    </div>
}
