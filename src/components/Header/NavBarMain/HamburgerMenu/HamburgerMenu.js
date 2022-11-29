import react, { useState } from 'react';
import {NavLink} from "react-router-dom";
import css from './HamburgerMenu.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'


export const HamburgerMenu = () => {
    const [menuExtended, toggleMenuExtended] = useState(false);


    return (
        <>
        <div onClick={()=>toggleMenuExtended(!menuExtended)} className={css['hamburger-menu']}>
            <FontAwesomeIcon icon={faBars} className={css['hamburger-icon']} /> Menu
        </div>
            {menuExtended &&
                <div className={css['menu-extended']}>
                    <NavLink onClick={()=>toggleMenuExtended(!menuExtended)} to="/">home</NavLink>
                    <NavLink onClick={()=>toggleMenuExtended(!menuExtended)} to="/login">login</NavLink>
                </div>
            }
        </>
    )
}

export default HamburgerMenu;