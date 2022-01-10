import { Navigate } from 'react-router-dom';
import '../Assets/styles/dashboard.css'

import { DashWelcomeBanner, DashboardFastLinks, DashboardStats, AccountNotActivated, EnterpriseList } from "../RoutesSubComponents/dashboardComponents";
import { useAuth } from '../hooks/authHooks';

const Dashboard = () => {
    const { authedInfo, userType } = useAuth();
    const { name } = authedInfo.general;
    // const { contact, tel } = authedInfo.other;
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
        <div className="dashboardPart">
            <DashWelcomeBanner props={{ userType: userType.toLowerCase(), name }} />
            <DashboardStats props={{ userType: userType }} />
            {userDashboardComponents[userType]}
        </div>

        <AccountNotActivated />
    </>

}

export default Dashboard;
