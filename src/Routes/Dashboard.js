import { useContext } from 'react';
import '../Assets/styles/dashboard.css'
import { UserContext } from '../Contexts/userContext';

import { DashWelcomeBanner, DashboardFastLinks, DashboardStats } from "../RoutesSubComponents/dashboardComponents";

const Dashboard = () => {
    const context = useContext(UserContext);
    const { userType } = context.userInfo
    return <>
        <div className="dashboardPart">
            <DashWelcomeBanner props={{ userType }} />
            <DashboardStats props={{ userType }} />
            <DashboardFastLinks props={{ userType }} />
        </div>
    </>

}

export default Dashboard;

{/* <div className="inDeveloppement">
        <p>En cours de creation ... <i className="mdi mdi-spin mdi-loading"></i></p>
    </div> */}