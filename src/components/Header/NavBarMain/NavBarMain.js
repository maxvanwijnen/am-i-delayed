import react, {useContext} from 'react';
import css from './navbarmain.module.css';
import { NavLink } from 'react-router-dom';
import { HamburgerMenu } from './HamburgerMenu/HamburgerMenu';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons";
import {AuthContext} from "../../../context/AuthContext";



export const NavBarMain = () => {

    const {auth,funcLogin,funcLogout} = useContext(AuthContext);

    console.log(auth.isAuth);

    return (
        <nav className={css['nav-bar-main']}>
            <div className={css['link-container']}>
                <HamburgerMenu />
            </div>

            {!auth.isAuth &&
                <div className={css['link-container']}>
                    <FontAwesomeIcon icon={faUser} />
                    <NavLink to="/login">login</NavLink>
                    <NavLink to="/register" className={css['link-register']}>create account</NavLink>
                </div>


            }
            {auth.isAuth &&
                <div className={css['link-container']} onClick={funcLogout}>
                    <FontAwesomeIcon icon={faUser} />
                    <NavLink to="/login">Logout</NavLink>
                </div>}

        </nav>
    )
}

export default NavBarMain;