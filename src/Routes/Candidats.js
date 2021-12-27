import { Pagination } from "../GlobalComponents/Pagination";
import { CandidatesList } from "../RoutesSubComponents/CandidatsComponents";
import { CandidateOrEmployerFilter } from "../GlobalComponents/Filter";
const Candidats = () => {
    return <div className="dashboardPart">
        <CandidateOrEmployerFilter props={{ userType: 'Employeur' }} />
        <CandidatesList />
        <Pagination />
    </div>
}

export default Candidats;