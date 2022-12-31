import react, {useContext, useState} from 'react';
import {NavLink} from "react-router-dom";
import css from './HamburgerMenu.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import {AuthContext} from "../../../../context/AuthContext";


export const HamburgerMenu = () => {
    const [menuExtended, toggleMenuExtended] = useState(false);
    const { auth, funcLogout } = useContext(AuthContext);


    return (
        <>
        <div onClick={()=>toggleMenuExtended(!menuExtended)} className={css['hamburger-menu']}>
            <FontAwesomeIcon icon={faBars} className={css['hamburger-icon']} /> Menu
        </div>
            {menuExtended &&
                <div className={css['menu-extended']}>
                    <NavLink onClick={()=>toggleMenuExtended(!menuExtended)} to="/">home</NavLink>
                    {!auth.isAuth && <NavLink onClick={()=>toggleMenuExtended(!menuExtended)} to="/login">login</NavLink>}
                    {!auth.isAuth && <NavLink onClick={()=>toggleMenuExtended(!menuExtended)} to="/register">create account</NavLink>}
                    {auth.isAuth && <NavLink to="/login" onClick={funcLogout}>Logout</NavLink>}
                        </div>
            }
        </>
    )
}

export default HamburgerMenu;