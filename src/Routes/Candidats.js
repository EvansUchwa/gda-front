import { Pagination } from "../GlobalComponents/Pagination";
import { CandidatesList } from "../RoutesSubComponents/CandidatsComponents";
import { CandidateOrEmployerFilter } from "../GlobalComponents/Filter";
import { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../hooks/authHooks";
import { useParams } from "react-router-dom";
import { FixedLoader } from "../GlobalComponents/Loader";
import { dispatchCandidatListApi } from "../RawData/links";
import { DataNotFound } from '../GlobalComponents/Message'

const Candidats = () => {
    const { apiInfos } = useAuth();
    const { baseApi, headerApi, userType } = apiInfos;
    const { type, page } = useParams();
    const [candidats, setCandidats] = useState();
    const [pageInfos, setPageInfos] = useState({})
    const [load, setLoad] = useState('')
    const [apiLink, setApiLink] = useState(dispatchCandidatListApi(type, 'get'))
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
                    setCandidats(res.data.data)
                    setPageInfos({
                        ...pageInfos,
                        totalPage: res.data.last_page,
                        currentPage: parseInt(page),
                        link: '/Candidats/' + type
                    })

                } else {
                    setCandidats([])
                }
                setLoad('')

            })
            .catch(err => console.log(err))
    }, [page, apiLink])

    return <div className="dashboardPart">
        <CandidateOrEmployerFilter props={{ userType: 'ENTREPRISE', setApiLink }} />
        {load}
        {
            candidats ?
                candidats.length ?
                    <CandidatesList props={{ candidats }} />
                    : <DataNotFound props={{ dataType: 'aucun profil ne correspond a votre recherche' }} />
                : <FixedLoader />
        }
        {
            pageInfos.totalPage > 1 ?
                <Pagination props={{ pageInfos }} />
                : '...'
        }
    </div>
}

export default Candidats;