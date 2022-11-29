import react, {createContext, useState, useContext, useEffect} from 'react';
import {useNavigate} from "react-router";
import {FireBaseContext} from "./FireBaseContext";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";



export const AuthContext = createContext({});

function AuthContextProvider({children}){

    const {fireBase, fireBaseGetAuth} = useContext(FireBaseContext);


    const [auth,setAuth] = useState({
        isAuth: false,
        user: null,
    })
    const [jwtToken, setJwtToken] = useState();



    useEffect(()=>{
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log('tralala')
                console.log(user)
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                const uid = user.uid;
                console.log(uid)
                setAuth({
                    ...auth,
                    isAuth: true
                })
            } else {
                console.log('user is uitgeloegd')
                // ...
            }
        });
    },[]);

    const navigate = useNavigate();

    function login(email,password) {

        const auth = getAuth();

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;

                // ...
                setAuth({
                    ...auth,
                    isAuth:true,
                    user:'Max',
                });


                //Get tokenId
                auth.currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
                    setJwtToken(idToken);
                }).catch(function(error) {
                    // Handle error
                });
                console.log('je bent ingelogd');
                navigate('/profile');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode)
                console.log(errorMessage)
            });

    }


    function logout(){
        const auth = getAuth()
        signOut(auth).then(() => {
            setAuth({
                ...auth,
                isAuth:false,
                user:null,
            })
            navigate("/");
            console.log("Signed out successfully")
        }).catch((error) => {
            // An error happened.
        });

        console.log('Je bent uitgelogd');
        navigate('/');
    }

    const contextData = {
        auth: auth,
        funcLogin: login,
        funcLogout:logout,
    };

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;