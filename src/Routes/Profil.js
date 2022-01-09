
import '../Assets/styles/profil.css'
import { ProfilLayout } from "../RoutesSubComponents/profilComponents"
import { useAuth } from '../hooks/authHooks'
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from 'axios';
import { RequireToBeCandidate, RequireToBeEnterprise } from "../middleware"
const Profil = () => {
    const params = useParams();
    const { profilId, profilType } = params
    const [profilT, setProfilT] = useState('');
    const [profilInfo, setProfilInfo] = useState({});
    const { apiInfos, userType, authedInfo } = useAuth();

    useEffect(() => {
        const { baseApi, headerApi } = apiInfos;

        if (profilId && profilType) {
            let axiosUrl = ''
            if (profilType == 'candidat') {
                axiosUrl = '/api/candidats/show-candidat/' + profilId
            }
            else {
                axiosUrl = '/api/entreprise/show-entreprise/' + profilId
            }
            axios.get(baseApi + axiosUrl, { headers: headerApi })
                .then(res => {
                    // console.log(res.data)
                    setProfilT(profilType.toUpperCase())
                    setProfilInfo(res.data)
                })
                .catch(err => console.log(err))
        } else {
            setProfilT(userType.toUpperCase())
            setProfilInfo(authedInfo.other)
        }

    }, [])

    return <>
        {
            (() => {
                if (userType === 'CANDIDAT' && profilType == 'candidat') {
                    return <RequireToBeEnterprise>
                        <ProfilLayout props={{ profilT, profilInfo }} />
                    </RequireToBeEnterprise>
                } else if (userType === 'ENTREPRISE' && profilType == 'entreprise') {
                    return <RequireToBeCandidate>
                        <ProfilLayout props={{ profilT, profilInfo }} />
                    </RequireToBeCandidate>
                } else {
                    return <ProfilLayout props={{ profilT, profilInfo }} />
                }
            })()
        }
    </>
}



export default Profil;