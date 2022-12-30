import react, {useContext, useState} from "react";
import css from './register.module.css';
import {AuthContext} from "../../../context/AuthContext";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

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
            const auth = getAuth();
            createUserWithEmailAndPassword(auth, fields.email, fields.password)
                .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    console.log(user)
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode)
                    // ..
                });
        }


    }

    return (
        <section className={css['login-form']}>



            <h1>Register</h1>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium asperiores aut blanditiis cupiditate dolores ducimus, omnis perferendis quibusdam quos ratione recusandae similique suscipit temporibus? Blanditiis consectetur corporis dicta dolorum, enim nemo possimus quaerat rem tempore voluptatum. Commodi cum, deleniti omnis repellendus similique voluptas? Ab asperiores autem beatae cum cumque, dignissimos harum, ipsum itaque laboriosam nobis officia perspiciatis, possimus provident quas reprehenderit tenetur veniam? A alias aperiam aut commodi deserunt, dicta distinctio, eaque eveniet explicabo fuga id incidunt nemo nesciunt pariatur quibusdam quod sunt temporibus totam veniam voluptatum? Animi eius facilis in laudantium optio, quam quidem rem reprehenderit sunt, voluptas voluptate!</p>

            <form onSubmit={(e)=>submit(e)}>
                <label htmlFor="email">Email</label>
               {error.invalidEmail && <div>Please enter a valid emailadsress</div>}
                <input type="text"
                       name="email"
                       value={fields.email}
                       onChange={(e)=>updateField(e)}
                />

                <label htmlFor="password">Password</label>
                {error.passwordsDontMatch && <div>Password's don't match</div>}
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

        </section>
    )
}

export default Register;