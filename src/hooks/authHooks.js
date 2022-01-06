import { useContext, useState } from "react";
import { createContext } from "react";

const AuthContext = createContext();
export function useAuth() {
    return useContext(AuthContext)
}

export const useAuthProvider = () => {

    const [authed, setAuthed] = useState(window.localStorage.getItem('gda-auth') ? true : false);
    const [authedInfo, setAuthedInfo] = useState(window.localStorage.getItem('gda-authInfos') ?
        JSON.parse(window.localStorage.getItem('gda-authInfos')) : null)

    const apiInfos = {
        baseApi: 'https://www.gda-services.com',
        headerApi: {
            "Authorization": "3979af088d2327ca3e1303ed4be4c2de",
            "Name": "GDA",
            "Version": "1.0"
        }
    }

    return {
        userId: authedInfo !== null ? authedInfo.other.id : null,
        userType: authedInfo !== null ? authedInfo.general.role : '',
        apiInfos,
        authedInfo,
        setUserInfo(data) {
            window.localStorage.setItem('gda-authInfos', JSON.stringify(data))
            setAuthedInfo(data)
        },
        updateOtherUserInfo(newData) {
            window.localStorage.setItem('gda-authInfos',
                JSON.stringify({ ...authedInfo, other: newData }))
            setAuthedInfo({ ...authedInfo, other: newData })
        },
        authed,
        login() {
            window.localStorage.setItem('gda-auth', true)
            setAuthed(true)
        },
        logout() {
            window.localStorage.removeItem('gda-auth')
            window.localStorage.removeItem('gda-authInfos')
            setAuthedInfo(null)
            setAuthed(false)
        },
        accountIsActivated() {
            return authedInfo.general.is_active !== "0" ? true : false
        }
    }
}

export const AuthProvider = ({ children }) => {
    const auth = useAuthProvider();

    return <AuthContext.Provider value={auth}>
        {children}
    </AuthContext.Provider>
}


