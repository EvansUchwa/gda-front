import { Navigate } from 'react-router-dom';
import '../Assets/styles/dashboard.css'

import { DashWelcomeBanner, DashboardFastLinks, DashboardStats, AccountNotActivated } from "../RoutesSubComponents/dashboardComponents";
import { useAuth } from '../hooks/authHooks';

const Dashboard = () => {
    const { authedInfo, userType } = useAuth();

    // const { contact, tel } = authedInfo.other;

    return <>
        {
            (() => {
                if (authedInfo !== null && (authedInfo.other !== null)) {
                    const { name } = authedInfo.general;
                    return <div className="dashboardPart">
                        <DashWelcomeBanner props={{ userType: userType.toLowerCase(), name }} />
                        <DashboardStats props={{ userType: userType.toLowerCase() }} />
                        {
                            (() => {
                                if (userType != 'Admin') {
                                    return <DashboardFastLinks props={{ userType: userType.toLowerCase() }} />
                                } else {
                                    return <p>Nothing</p>
                                }
                            })()
                        }
                    </div>
                } else {
                    return <Navigate to='/Finaliser-Inscription' replace />
                }
            })()
        }
        <AccountNotActivated />
    </>

}

export default Dashboard;
