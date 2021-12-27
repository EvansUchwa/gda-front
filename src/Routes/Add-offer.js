import { useContext } from 'react';
import '../Assets/styles/offer.css';
import { UserContext } from '../Contexts/userContext';
import { AddOfferForm } from "../RoutesSubComponents/AddOfferComponents";
const Add_offer = () => {
    const context = useContext(UserContext);
    const { userInfo } = context
    return <div className="dashboardPart">
        <AddOfferForm props={{ userInfo }} />
    </div>
}

export default Add_offer;