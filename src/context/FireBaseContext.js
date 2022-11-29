import React,{createContext} from 'react';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

export const FireBaseContext = createContext({});

export function FireBaseContextProvider ({children}) {

    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
        apiKey: "AIzaSyBeEU00YIqGA11BOgdo7aSd9G7oSFRrcEU",
        authDomain: "where-is-my-plane-6e5e7.firebaseapp.com",
        databaseURL: "https://where-is-my-plane-6e5e7-default-rtdb.europe-west1.firebasedatabase.app",
        projectId: "where-is-my-plane-6e5e7",
        storageBucket: "where-is-my-plane-6e5e7.appspot.com",
        messagingSenderId: "156334592452",
        appId: "1:156334592452:web:cbf1b4c75d0302ad659491",
        measurementId: "G-PBGDK87Y2E"
    };


// Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);

    // Initialize Firebase Authentication and get a reference to the service
    const fbAuth = getAuth(app);



    const data = {
        fireBaseApp:app,
        fireBaseGetAuth:fbAuth
    }
    return (
        <FireBaseContext.Provider value={data}>
            { children }
        </FireBaseContext.Provider>
    );
}

export default FireBaseContextProvider;