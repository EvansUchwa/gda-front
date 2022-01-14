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
    const { toggleOptionsNav, userType } = props
    return <>
        {
            sidebarLinks[userType].map((am, index) => <div key={"adminMenu" + index}
                onClick={(event) => toggleOptionsNav(event)}>
                <span className="dashMenuDropdown">
                    <i className={"mdi " + am.menuIcon}></i>
                    {am.menuName}
                </span>
                <i className="mdi mdi-chevron-right"></i>
                <section className="">
                    {
                        am.menuOptions.map((amM0, index) => <Link
                            key={am.menuName + 'subLink' + index}
                            to={amM0.link}>{amM0.ph}
                        </Link>)
                    }
                </section>
            </div>)
        }
    </>
}