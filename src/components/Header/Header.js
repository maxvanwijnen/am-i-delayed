import react, {useContext} from 'react';
import css from './header.module.css';
import { NavBarMain } from './NavBarMain/NavBarMain';
import { HeaderFlightInfo } from './HeaderFlightInfo/HeaderFlightInfo';
import { SearchBar } from './SearchBar/SearchBar';
import { SubMenu } from './SubMenu/SubMenu';
import {AuthContext} from "../../context/AuthContext";


export const Header = ({flightId, flightInfo, setFlightId}) => {
    const {auth, login} = useContext(AuthContext);


    return (
        <header className={css['header']}>

            <NavBarMain />

            {Object.keys(flightInfo).length === 0 &&
                <h1>FLIGHT FINDER</h1>
            }
            {Object.keys(flightInfo).length > 0 &&
                <HeaderFlightInfo flightId={flightId} flightInfo={flightInfo} />
            }

            <SearchBar flightId={ flightId } setFlightId={ setFlightId }/>

            <div className={css['gradient-white']}>
            </div>
        </header>
    )
}

export default Header;