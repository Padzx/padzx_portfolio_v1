// ----> Component Navbar <----

import Icons from "./icons/icons";
import NavegationMenu from "../sidebar/navegationMenu";
import './navbar.scss'


const Navbar = () => {

    return(
        <div className="navbar">
            <NavegationMenu />
            <Icons />
        </div>
    )
}

export default Navbar;