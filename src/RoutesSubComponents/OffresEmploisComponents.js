import { JobCard } from '../GlobalComponents/Card';
const faketabs = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]


export const JobsOfferList = () => {

    return <div className="ppc-published-items">
        <div className='ppc-title'>
            <h3>Les offres les plus vues</h3>
        </div>
        <div className='ppc-itemsSlide'>
            {
                faketabs.map((item, index) => <JobCard key={'MostViewedJob' + index}
                    props={{
                        candidateId: index,
                        jobAutor: 'GDA Sarl', jobAutorImg: '',
                        jobType: 'Community Manager CM', localisation: 'Cotonou',
                        likes: 12, views: 20
                    }} />)
            }
        </div>
    </div>
}
