import { useState } from 'react';
import { JobCard } from '../GlobalComponents/Card';
import { Modal } from '../GlobalComponents/Modal';
import { ProfilDetailModal } from '../GlobalComponents/SiteModal';

export const JobsOfferList = ({ props }) => {
    const { jobOffers, type } = props
    const [modalInfoId, setModalInfoId] = useState();
    const [toggleModal, setToggleModal] = useState(false);
    const offerModal = <ProfilDetailModal props={{
        modalId: modalInfoId,
        userType: 'candidat'
    }} />;
    return <div className="ppc-published-items">
        <div className='ppc-title'>
            {
                (() => {
                    if (type === 'latest') {
                        return <h3>Les dernières offres publiées</h3>
                    } else if (type === 'mostViewed') {
                        return <h3>Les offres les plus populaires</h3>
                    }
                    else if (type === 'suggestion') {
                        return <h3>Les offres recommandées pour vous</h3>
                    }
                })()
            }
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
