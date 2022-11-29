import react from 'react';
import css from './submenu.module.css';
import {NavLink} from "react-router-dom";


export const SubMenu = () => {
    return (
        <div className={`content-wrapper ${css['sub-menu']}`}>
            <nav>
                <NavLink to="/" className={css['current-page']}>My Flight</NavLink>
                <NavLink to="/flight-tracker" >Flight Tracker</NavLink>

            </nav>
        </div>

    )
}

export default SubMenu;