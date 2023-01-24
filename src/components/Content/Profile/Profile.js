import react, {useContext, useEffect, useState} from "react";
import css from './profile.module.css';
import {AuthContext} from "../../../context/AuthContext";
import { getAuth } from "firebase/auth";

export const Profile = () => {

    const { funcRegister,  auth } = useContext(AuthContext);
    const { email, displayName, phone } = auth.user;


    const [fields, setFields] = useState({
        email: email
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
        if (formValidator()) {
        }


    }

    return (
        <form className={css['login-form']} onSubmit={(e)=>submit(e)}>
            {error.passwordsDontMatch && <div>Password's don't match</div>}
            {error.invalidEmail && <div>Please enter a valid emailadsress</div>}

            <h2>Your Profile</h2>

            <label htmlFor="email">Email</label>
            <input type="text"
                   name="email"
                   value={fields.email}
                   onChange={(e)=>updateField(e)}
            />



            <button type="submit">Save</button>
        </form>
    )
}

export default Profile;