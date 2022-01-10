import { CandidateOrEmployerFilter } from "../GlobalComponents/Filter";
import { JobsOfferList } from "../RoutesSubComponents/OffresEmploisComponents";
import { Pagination } from '../GlobalComponents/Pagination.js'
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../hooks/authHooks";
import { FixedLoader } from "../GlobalComponents/Loader";
import { DataNotPosted } from "../GlobalComponents/Message";

const Offres_Emplois = () => {
    const { apiInfos } = useAuth();
    const { baseApi, headerApi } = apiInfos;
    const { type, page } = useParams();
    const [jobOffers, setJobOffers] = useState()
    const [pageInfos, setPageInfos] = useState({})

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
                setJobOffers(res.data.data)
                setPageInfos({
                    ...pageInfos,
                    totalPage: res.data.last_page,
                    currentPage: parseInt(page),
                    link: '/Offres-Emplois/'
                })
            })
            .catch(err => console.log(err))
    },
        []);
    return <div className="dashboardPart">
        {
            jobOffers ?
                <CandidateOrEmployerFilter props={{ userType: 'Candidat' }} />
                : ''
        }
        {
            jobOffers ?
                jobOffers.length > 0 ?
                    <JobsOfferList props={{ jobOffers }} />
                    : <DataNotPosted props={{ dataType: " offres d'emplois " }} />
                :
                <FixedLoader />
        }
        {
            jobOffers && pageInfos.totalPage > 1 ?
                <Pagination props={{ pageInfos }} />
                : ''
        }
    </div>
}

export default Offres_Emplois;