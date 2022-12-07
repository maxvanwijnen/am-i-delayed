import react, {useContext} from 'react';
import css from './content.module.css';
import { FlightData } from './FlightData/FlightData';
import {FlightContext} from "../../context/FlightContext";
import {Route, Router, Routes, Switch} from "react-router";
import Login from "./Login/Login";
import Register from "./Register/Register";
import Profile from "./Profile/Profile";

export const Content = () => {

    const {flightId, flightInfo, wx} = useContext(FlightContext);

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




            </Routes>


        </main>

    )
}

export default Content;