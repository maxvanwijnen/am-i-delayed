import react, {useContext, useEffect, useState} from 'react';
import css from './header.module.css';
import { NavBarMain } from './NavBarMain/NavBarMain';
import { HeaderFlightInfo } from './HeaderFlightInfo/HeaderFlightInfo';
import { SearchBar } from './SearchBar/SearchBar';
import { SubMenu } from './SubMenu/SubMenu';
import {AuthContext} from "../../context/AuthContext";


export const Header = ({ flightInfo }) => {

    const {auth, login} = useContext(AuthContext);

    console.log('bwerwrwerwe');
    console.log(flightInfo);


    return (
        <header className={css['header']}>

            <NavBarMain />


            {Object.keys(flightInfo).length > 0 &&
                <HeaderFlightInfo />
            }
            {Object.keys(flightInfo).length === 0 &&
                <>
                <h1>FLIGHT FINDER</h1>
                <SearchBar />
                </>
            }





            <div className={css['gradient-white']}>
            </div>
        </header>
    )
}

export default Header;