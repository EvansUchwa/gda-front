import '../Assets/styles/dashboard.css'

import {
    DashWelcomeBanner, DashboardFastLinks,
    DashboardStats, AccountNotActivated, EnterpriseList
} from "../RoutesSubComponents/dashboard";
import { useAuth } from '../hooks/authHooks';

const Dashboard = () => {
    const { authedInfo, userType } = useAuth();
    const { name } = authedInfo.general;
    const userDashboardComponents = {
        ENTREPRISE: <>
            <DashboardFastLinks props={{ userType: userType.toLowerCase() }} />
        </>,
        CANDIDAT: <>
            <DashboardFastLinks props={{ userType: userType.toLowerCase() }} />
            <EnterpriseList />
        </>
    }

    return <>
        <>
            <DashWelcomeBanner props={{ userType: userType.toLowerCase(), name }} />
            <DashboardStats props={{ userType: userType }} />
            {userDashboardComponents[userType]}
        </>

        <AccountNotActivated />
    </>

}

export default Dashboard;
