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

    const [finishedLoading, toggleFinishedLoading] = useState(false);

    const [jwtToken, setJwtToken] = useState();



    useEffect(()=>{
        const authFB = getAuth();
        onAuthStateChanged(authFB, (user) => {
            if (user) {
                const user = getAuth().currentUser;


                console.log('hola')

                setUserInfo();

                toggleFinishedLoading(true)
            } else {
                console.log('user is uitgeloegd')
                toggleFinishedLoading(true)

            }
        });

    },[]);

    const navigate = useNavigate();


    const setUserInfo = () => {

        const user = getAuth().currentUser;


        if (user !== null) {

            let freshUserInfo = {};
            user.providerData.forEach((profile) => {
                console.log("Sign-in provider: " + profile.providerId);
                console.log("  Provider-specific UID: " + profile.uid);
                console.log("  Name: " + profile.displayName);
                console.log("  Email: " + profile.email);
                console.log("  Photo URL: " + profile.photoURL);
                freshUserInfo = {
                    ...freshUserInfo,
                    email: profile.email,
                    name: profile.displayName
                }
            });

            setAuth({
                ...auth,
                isAuth:true,
                user: {
                    ...freshUserInfo
                }
            })

        }
    }

    function login(email,password) {

        const authFB = getAuth();

        signInWithEmailAndPassword(authFB, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;

                console.log('userinfo')
                console.log(user.providerData)

                // ...
                setAuth({
                    ...auth,
                    isAuth:true,
                    user:{
                        email:user.providerData[0].email,
                        displayName:user.providerData[0].displayName,
                        phone:user.providerData[0].phoneNumber
                    },
                });


                //Get tokenId
                authFB.currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
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
        const authFB = getAuth()
        signOut(authFB).then(() => {
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
            {finishedLoading && children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;