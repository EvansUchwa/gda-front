import { CandidateOrEmployerFilter } from "../GlobalComponents/Filter";
import { JobsOfferList } from "../RoutesSubComponents/OffresEmploisComponents";
import { Pagination } from '../GlobalComponents/Pagination.js'
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../hooks/authHooks";
import { FixedLoader } from "../GlobalComponents/Loader";

const Offres_Emplois = () => {
    const { apiInfos } = useAuth();
    const { baseApi, headerApi } = apiInfos;
    const { type, page } = useParams();
    const [jobOffers, setJobOffers] = useState([])
    const [pageInfos, setPageInfos] = useState({
        totalPage: 12,
        currentPage: parseInt(5),
        link: '/Offres-Emplois/' + type
    })

    useEffect(() => {
        let apiComplete = "";
        if (type === 'latest') {
            apiComplete = "/api/offres/dernier-offres"
        } else if (type === 'mostViewed') {
            apiComplete = "/api/offres/offres-populaire"
        }
        else if (type === 'suggestion') {
            apiComplete = "/api/offres/offres-recommander"
        } else {
            apiComplete = '/api/offres/list-offres?page=' + page
        }
        axios.get(baseApi + '/api/offres/list-offres?page=' + page,
            { headers: headerApi })
            .then(res => {
                // if (['latest', 'mostViewed', 'suggestion'].includes(type)) {
                //     console.log(res.data.data)
                // } else {
                //     setJobOffers(res.data.data)
                // }
                setJobOffers(res.data.data)
            })
            .catch(err => console.log(err))
    },
        []);
    return <div className="dashboardPart">
        <CandidateOrEmployerFilter props={{ userType: 'Candidat' }} />
        {
            jobOffers.length ?
                <JobsOfferList props={{ jobOffers }} />
                : <FixedLoader />
        }
        <Pagination props={{ pageInfos }} />
    </div>
}

export default Offres_Emplois;