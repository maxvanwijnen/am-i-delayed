import logo from './logo.svg';
import './App.css';
import axios from "axios";
import React, {useContext} from  'react';
import {FlightContext} from "./context/FlightContext";
import { FlightData } from "./components/Content/FlightData/FlightData";
import { Header } from './components/Header/Header';
import { Content } from './components/Content/Content';
import { fetchFlightData } from './api/getFllights.js';

const App = () => {

    const {flightId,flightInfo} = useContext(FlightContext);

    return (
        <>
            <Header
                flightInfo={flightInfo}
            />
           <Content />
        </>
    )
}



export default App;
