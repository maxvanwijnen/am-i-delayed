import react, {useContext, useState} from "react";
import css from './register.module.css';
import {AuthContext} from "../../../context/AuthContext";

export const Register = () => {

    const { funcRegister } = useContext(AuthContext);



    const submit = (e) => {
        e.preventDefault();

        funcRegister(e.target[0].value,e.target[1].value);


    }



    return (
        <form className={css['login-form']} onSubmit={(e)=>submit(e)}>
            <div>Register</div>
            <input type="text" name="username"/>
            <input type="password" name="password" />
            <button type="submit">Register</button>
        </form>
    )
}

export default Register;