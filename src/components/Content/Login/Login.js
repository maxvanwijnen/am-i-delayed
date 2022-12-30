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
        <section className={css['login-form']} >
            <h1>Login</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ducimus error, est facilis fugit maxime quos saepe? Aut commodi consectetur cumque cupiditate, doloribus eius eos eveniet iure iusto maiores minima neque numquam officia, optio quaerat reprehenderit saepe sapiente soluta. Aliquam amet asperiores consequuntur cupiditate dicta dolor dolorem doloribus eaque earum harum hic labore laudantium libero magni minima minus neque nesciunt obcaecati odio placeat quam quos ratione repellendus rerum soluta, sunt tempore vero. Alias deserunt ducimus harum hic labore, laborum mollitia nisi officiis porro vel. Asperiores delectus eaque fuga nostrum repellat. Ab aliquid aut autem nisi odit perspiciatis quasi tenetur velit?</p>

            <form onSubmit={(e)=>submit(e)}>

                <label htmlFor="username">Email address</label>
                <input type="text" name="username"/>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" />
                <button type="submit">Inlogen</button>
            </form>
        </section>
    )
}

export default Login;