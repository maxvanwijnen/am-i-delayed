import react, {useContext} from 'react';
import css from './content.module.css';
import { FlightData } from './FlightData/FlightData';
import {FlightContext} from "../../context/FlightContext";
import {Route, Router, Routes, Switch} from "react-router";
import Login from "./Login/Login";

export const Content = () => {

    const {flightId, flightInfo, wx} = useContext(FlightContext);

    return (
        <section className={css['content']}>
            <Routes>

                <Route path="/login"
                        element={<Login/>}
                />
                <Route path="/"
                       element={Object.keys(flightInfo).length > 0 &&
                           <FlightData flightId={ flightId } flightInfo={flightInfo} wxInfo={wx}/>}
                />




            </Routes>


        </section>

    )
}

export default Content;