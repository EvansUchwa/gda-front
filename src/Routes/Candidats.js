import { Pagination } from "../GlobalComponents/Pagination";
import { CandidatesList } from "../RoutesSubComponents/CandidatsComponents";
import { CandidateOrEmployerFilter } from "../GlobalComponents/Filter";
import { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../hooks/authHooks";
import { useParams } from "react-router-dom";
import { FixedLoader } from "../GlobalComponents/Loader";

const Candidats = () => {
    const { apiInfos } = useAuth();
    const { baseApi, headerApi } = apiInfos;
    const { type, page } = useParams();
    const [candidats, setCandidats] = useState([])
    const [listApiData, setListApiData] = useState(null);
    const [pageInfos, setPageInfos] = useState({})
    const [loader, setLoader] = useState()


    useEffect(() => {
        setCandidats([])
        setLoader(<FixedLoader />)
        let apiComplete = "";
        if (type === 'latest') {
            apiComplete = '/api/candidats/list-candidat?page=' + page
        } else if (type === 'mostViewed') {
            apiComplete = "/api/candidats/candidat-plus-visite"
        }
        else if (type === 'suggestion') {
            apiComplete = '/api/candidats/list-candidat?page=' + page
        }
        axios.get(baseApi + apiComplete,
            { headers: headerApi })
            .then(res => {
                setListApiData(res.data)

                if (['mostViewed'].includes(type)) {
                    setCandidats(res.data)
                } else {
                    setCandidats(res.data.data)
                    setPageInfos({
                        ...pageInfos,
                        totalPage: res.data.last_page,
                        currentPage: parseInt(page),
                        link: '/Candidats/' + type
                    })
                }
                setLoader('')
            })
            .catch(err => console.log(err))
    }, [page])

    return <div className="dashboardPart">
        <CandidateOrEmployerFilter props={{ userType: 'Employeur' }} />
        <CandidatesList props={{ candidats }} />
        {
            // candidats.length ?
            // <CandidatesList props={{ candidats }} />
            // : <FixedLoader />
            loader
        }
        <Pagination props={{ pageInfos }} />
    </div>
}

export default Candidats;