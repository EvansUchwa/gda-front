import { CandidateOrEmployerFilter } from "../GlobalComponents/Filter";
import { JobsOfferList } from "../RoutesSubComponents/OffresEmploisComponents";
import { Pagination } from '../GlobalComponents/Pagination.js'
const Offres_Emplois = () => {
    return <div className="dashboardPart">
        <CandidateOrEmployerFilter props={{ userType: 'Candidat' }} />
        <JobsOfferList />
        <Pagination />
    </div>
}

export default Offres_Emplois;