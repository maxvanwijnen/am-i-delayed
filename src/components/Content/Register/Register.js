import react, {useContext, useState} from "react";
import css from './register.module.css';
import {AuthContext} from "../../../context/AuthContext";

export const Register = () => {

    const { funcRegister } = useContext(AuthContext);


    const [fields, setFields] = useState({
        email:"",
        password:"",
        password2:""
    });

    const [error, setError] = useState({});


    const updateField = (e) => {

        const {name, value} = e.target;

        setFields({
            ...fields,
            [name]:value
        })
    }

    const passwordsMatch = () => {
        return fields.password === fields.password2;
    }

    const validEmail = () => {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(fields.email);
    }

    const formValidator = () => {

        let errorList = {};

        if (passwordsMatch()){
            errorList = {...errorList,passwordsDontMatch:false};
        }
        else {
            errorList = {...errorList,passwordsDontMatch:true};
        }

        if (validEmail()){
            errorList = {...errorList,invalidEmail:false};
        }
        else {
            errorList = {...errorList,invalidEmail:true};
        }

        setError({...error,...errorList});

        return !errorList.invalidEmail && !errorList.passwordsDontMatch;

    }

    const submit = (e) => {
        e.preventDefault();
        if (formValidator()){

        }


    }

    console.log(error);
    return (
        <form className={css['login-form']} onSubmit={(e)=>submit(e)}>
            {error.passwordsDontMatch && <div>Password's don't match</div>}
            {error.invalidEmail && <div>Please enter a valid emailadsress</div>}

            <div>Register</div>

            <label htmlFor="email">Email</label>
            <input type="text"
                   name="email"
                   value={fields.email}
                   onChange={(e)=>updateField(e)}
            />

            <label htmlFor="password">Password</label>
            <input
                type="password"
                name="password"
                value={fields.password}
                onChange={(e)=>updateField(e)}
            />

            <label htmlFor="password2">Type password again</label>
            <input
                type="password"
                name="password2"
                value={fields.password2}
                onChange={(e)=>updateField(e)}
            />

            <button type="submit">Register</button>
        </form>
    )
}

export default Register;