import { CandidateOrEmployerFilter } from "../GlobalComponents/Filter";
import { JobsOfferList } from "../RoutesSubComponents/offres-Emplois";
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
    const [apiLink, setApiLink] = useState(type !== 'suggestion' ? dispatchEnterpriseListApi(type, 'get')
        : dispatchEnterpriseListApi(type, 'get', authedInfo.general.id))

    const [jobOffers, setJobOffers] = useState()
    const [pageInfos, setPageInfos] = useState({})
    const [load, setLoad] = useState('')
    const dispatchAxiosQuery = (method, data, link) => {
        if (method == 'post') {
            return axios.post(baseApi + link + '' + page, data, { headers: headerApi })
        } else {
            return axios.get(baseApi + link + '' + page, { headers: headerApi })
        }
    }

    useEffect(() => {
        setLoad(<FixedLoader />)
        dispatchAxiosQuery(apiLink.method, apiLink.data, apiLink.link)
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
        [page, type, apiLink]);
    return <>

        <CandidateOrEmployerFilter props={{ userType: 'CANDIDAT', setApiLink }} />
        {
            jobOffers ?
                jobOffers.length ?
                    <JobsOfferList props={{ jobOffers, type }} />
                    : <DataNotPosted props={{ dataType: "aucune  offres d'emplois ne correspond a votre recherche " }} />
                :
                <FixedLoader />
        }
        {
            pageInfos.totalPage > 1 ?
                <Pagination props={{ pageInfos }} />
                : ''
        }
    </>
}

export default Offres_Emplois;