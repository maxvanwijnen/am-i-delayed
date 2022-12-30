import React from 'react';
import css from './footer.module.css';

const Footer = () => {
    return (
        <footer className={css['footer']}>
            <h2>Flightfinder</h2>
            <ul>
                <li>Pages</li>
                <li>Home</li>
                <li>Login</li>
                <li>Register</li>
            </ul>
            <ul>
                <li>Why use flightfinder?</li>
                <li>+ Seach by flight number</li>
                <li>+ Always the latest flight info</li>
                <li>+ Where is your plane now?</li>
            </ul>
            <ul>
                <li>Contact us</li>
                <li>info@thiswebsite.com</li>
                <li>Tel: 0031 6 123 45 678</li>
            </ul>

        </footer>
    )
}

export default Footer;