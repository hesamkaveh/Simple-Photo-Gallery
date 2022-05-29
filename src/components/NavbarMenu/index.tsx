import {routeObject} from "../../routes";
import {Link} from "react-router-dom";
import {styles} from "./NavbarMenu.style";
import {useLocation} from 'react-router-dom';

const NavbarMenu = () => {
    const location = useLocation();
    const classes = styles()

    return (
        <ul className={classes.menuContainer}>
            {Object.entries(routeObject).map(([_, value]) => {
                const name = value.name
                const path = value.path
                const translatedName = name()
                return (
                    <li key={translatedName}
                        className={`${classes.eachMenuItem} ${location.pathname === path ? classes.selected : ''}`}>
                        <Link to={path}>{translatedName}</Link>
                    </li>
                )
            })}
        </ul>
    )
}
export default NavbarMenu