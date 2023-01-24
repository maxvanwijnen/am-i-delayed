import React from 'react';
import css from './submenu.module.css';
import {NavLink} from "react-router-dom";
import { useLocation } from "react-router-dom";


export const SubMenu = () => {

    const { pathname } = useLocation();

    let flightTracker = '';
    let home = 'current-page';

    if (pathname === '/flight-tracker'){
        flightTracker = 'current-page';
        home = '';
    } else {
        flightTracker = '';
        home = 'current-page'
    }




    return (
        <div className={`content-wrapper ${css['sub-menu']}`}>
            <nav>
                <NavLink to="/" className={`${css[home]}`}>My Flight</NavLink>
                <NavLink to="/flight-tracker" className={`${css[flightTracker]}`}>Flight Tracker</NavLink>

            </nav>
        </div>

    )
}

export default SubMenu;