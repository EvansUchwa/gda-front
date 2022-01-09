import { sidebarLinks } from "../RawData/links";
import { Link } from "react-router-dom";


export const NotDropableSidebarLink = ({ props }) => {
    const { userType } = props;
    return <>
        {
            sidebarLinks[userType].map((lk, index) => <Link to={lk.link}
                key={userType + 'MenuLink' + index}>
                <i className="mdi mdi-account"></i>
                {lk.ph}
            </Link>)
        }
    </>
}
export const IsDropableSidebarLink = ({ props }) => {
    const { toggleOptionsNav } = props
    return <>
        {
            sidebarLinks['admin'].map((am, index) => <div key={"adminMenu" + index}>
                <i className={"mdi " + am.menuIcon}></i>
                <span className="dashMenuDropdown"
                    onClick={(event) => toggleOptionsNav(event)}>
                    {am.menuName}
                    <i className="mdi mdi-chevron-right"></i>
                </span>
                <section>
                    {
                        am.menuOptions.map((amM0, index) => <Link
                            key={am.menuName + 'subLink' + index}
                            to={"/Admin/" + am.menuName + amM0.link}>{amM0.ph}
                        </Link>)
                    }
                </section>
            </div>)
        }
    </>
}