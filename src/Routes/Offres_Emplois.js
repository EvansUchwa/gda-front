import { CandidateOrEmployerFilter } from "../GlobalComponents/Filter";
import { JobsOfferList } from "../RoutesSubComponents/OffresEmploisComponents";
import { Pagination } from '../GlobalComponents/Pagination.js'
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../hooks/authHooks";
import { FixedLoader } from "../GlobalComponents/Loader";
import { DataNotPosted } from "../GlobalComponents/Message";
import { dispatchEnterpriseListApi } from "../RawData/links";

const Offres_Emplois = () => {
    const { apiInfos, authedInfo } = useAuth();
    const { baseApi, headerApi } = apiInfos;
    const { type, page } = useParams();
    const [jobOffers, setJobOffers] = useState()
    const [pageInfos, setPageInfos] = useState({})
    const [load, setLoad] = useState('')
    const [apiLink, setApiLink] = useState(type != 'suggestion' ? dispatchEnterpriseListApi(type, 'get')
        : dispatchEnterpriseListApi(type, 'get', authedInfo.general.id))
    const dispatchAxiosQuery = (method, data) => {
        if (method == 'post') {
            return axios.post(baseApi + apiLink.link + '' + page, data, { headers: headerApi })
        } else {
            return axios.get(baseApi + apiLink.link + '' + page, { headers: headerApi })
        }
    }

    useEffect(() => {
        setLoad(<FixedLoader />)
        dispatchAxiosQuery(apiLink.method, apiLink.data)
            .then(res => {
                if (res.data !== undefined && res.data.data) {
                    setJobOffers(res.data.data)
                    setPageInfos({
                        ...pageInfos,
                        totalPage: res.data.last_page,
                        currentPage: parseInt(page),
                        link: '/Offres-Emplois/'
                    })
                } else {
                    setJobOffers([])
                }

                setLoad('')
            })
            .catch(err => console.log(err))
    },
        []);
    return <div className="dashboardPart">
        {
            jobOffers ?
                <CandidateOrEmployerFilter props={{ userType: 'CANDIDAT', setApiLink }} />
                : ''
        }
        {
            jobOffers ?
                jobOffers.length > 0 ?
                    <JobsOfferList props={{ jobOffers }} />
                    : <DataNotPosted props={{ dataType: "aucune  offres d'emplois ne correspond a votre recherche " }} />
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