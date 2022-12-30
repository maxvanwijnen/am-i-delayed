import react, {useContext, useEffect, useState} from 'react';
import css from './header.module.css';
import { NavBarMain } from './NavBarMain/NavBarMain';
import { HeaderFlightInfo } from './HeaderFlightInfo/HeaderFlightInfo';
import { SearchBar } from './SearchBar/SearchBar';
import { SubMenu } from './SubMenu/SubMenu';
import {AuthContext} from "../../context/AuthContext";


export const Header = ({ flightInfo }) => {

    const {auth, login} = useContext(AuthContext);


    return (
        <header className={css['header']}>
            <NavBarMain />
            {auth.isAuth && flightInfo.apiData &&
                <HeaderFlightInfo />
            }
            {!flightInfo.apiData &&
                <>
                    <span className={css['title']}>Flightfinder</span>
                    <SearchBar />
                </>
            }
            <div className={css['gradient-white']}>
            </div>
        </header>
    )
}

export default Header;