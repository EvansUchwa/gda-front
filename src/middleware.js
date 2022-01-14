import { Navigate } from "react-router-dom";
import { useAuth } from "./hooks/authHooks";

export const RequireToBeEnterprise = ({ children }) => {
    const { userType } = useAuth();
    return <>
        {
            userType == 'ENTREPRISE'
                ? children
                : <Navigate to="/Dashboard" />
        }
    </>
}

export const RequireToBeCandidate = ({ children }) => {
    const { userType } = useAuth();
    return <>
        {
            userType == 'CANDIDAT'
                ? children
                : <Navigate to="/Dashboard" />
        }
    </>
}




