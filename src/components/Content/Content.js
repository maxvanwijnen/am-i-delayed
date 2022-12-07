import react, {useContext} from 'react';
import css from './content.module.css';
import { FlightData } from './FlightData/FlightData';
import {FlightContext} from "../../context/FlightContext";
import {Route, Router, Routes, Switch} from "react-router";
import Login from "./Login/Login";
import Register from "./Register/Register";
import Profile from "./Profile/Profile";
import FlightTracker from "./FlightTracker/FlightTracker";

export const Content = () => {

    const {flightId, flightInfo, wx} = useContext(FlightContext);

    console.log('o0piipipipoi')
    console.log(flightInfo)

    return (
        <main className={css['content']}>
            <Routes>

                <Route path="/login"
                       element={<Login/>}
                />
                <Route path="/profile"
                       element={<Profile/>}
                />
                <Route path="/register"
                       element={<Register/>}
                />
                <Route path="/"
                       element={flightInfo.apiData &&
                           <FlightData flightId={ flightId } flightInfo={flightInfo} wxInfo={wx}/>}
                />
                <Route path="/flight-tracker"
                       element={flightInfo.apiData &&
                           <FlightTracker planeRegistration={flightInfo.apiData[0].aircraft.reg}/>}
                />

            </Routes>


        </main>

    )
}

export default Content;