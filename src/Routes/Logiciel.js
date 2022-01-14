import { useParams } from "react-router-dom";
import '../Assets/styles/logiciel.css';
import { DispatchPageTitle, LogicielDataListTable } from "../RoutesSubComponents/logiciel";

const Logiciel = () => {
    const { type, action } = useParams();
    return <div className="logicielPart">
        <DispatchPageTitle props={{ type, action }} />
        {
            action === 'liste' ?
                <LogicielDataListTable props={{ type }} />
                : ''
        }
    </div>
}


export default Logiciel;