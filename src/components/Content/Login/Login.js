import react, {useContext, useState} from "react";
import css from './login.module.css';
import {AuthContext} from "../../../context/AuthContext";

export const Login = () => {

    const { funcLogin } = useContext(AuthContext);



    const submit = (e) => {
        e.preventDefault();

        funcLogin(e.target[0].value,e.target[1].value);


    }



    return (
        <form className={css['login-form']} onSubmit={(e)=>submit(e)}>
            <h2>Login</h2>
            <label htmlFor="username">Email address</label>
            <input type="text" name="username"/>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" />
            <button type="submit">Inlogen</button>
        </form>
    )
}

export default Login;