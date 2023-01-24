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
        apiKey: process.env.REACT_APP_FB_API_KEY,
        authDomain: process.env.REACT_APP_FB_AUTH_DOMAIN,
        databaseURL: process.env.REACT_APP_FB_DB_URL,
        projectId: process.env.REACT_APP_FB_PROJECT_ID,
        storageBucket: process.env.REACT_APP_FB_STORAGE_BUCKET,
        messagingSenderId: process.env.REACT_APP_FB_MESSAGING_SENDER_ID,
        appId: process.env.REACT_APP_FB_APP_ID,
        measurementId: process.env.REACT_APP_FB_MEASUREMENT_ID
    };
    /*const firebaseConfig = {
        apiKey: "AIzaSyBeEU00YIqGA11BOgdo7aSd9G7oSFRrcEU",
        authDomain: "where-is-my-plane-6e5e7.firebaseapp.com",
        databaseURL: "https://where-is-my-plane-6e5e7-default-rtdb.europe-west1.firebasedatabase.app",
        projectId: "where-is-my-plane-6e5e7",
        storageBucket: "where-is-my-plane-6e5e7.appspot.com",
        messagingSenderId: "156334592452",
        appId: "1:156334592452:web:cbf1b4c75d0302ad659491",
        measurementId: "G-PBGDK87Y2E"
    };*/


// Initialize Firebase
    const app = initializeApp(firebaseConfig);

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