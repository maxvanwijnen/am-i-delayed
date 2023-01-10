import {useContext} from 'react';
import css from './content.module.css';
import { FlightData } from './FlightData/FlightData';
import {FlightContext} from "../../context/FlightContext";
import {Route, Routes} from "react-router";
import Login from "./Login/Login";
import Register from "./Register/Register";
import Profile from "./Profile/Profile";
import FlightTracker from "./FlightTracker/FlightTracker";
import Home from './Home/Home';


export const Content = () => {

    const {flightId, flightInfo, wx} = useContext(FlightContext);

    function getAircraftReg(flightInfo) {
        try {
            return flightInfo.apiData[0].aircraft.reg
        } catch (error) {
            return false
        }
    }



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
                {flightInfo.apiData && <Route path="/"
                                              element={<FlightData flightId={ flightId } flightInfo={flightInfo} wxInfo={wx}/>}
                />}
                {!flightInfo.apiData && <Route path="/"
                                              element={<Home />}
                />}




              {
                    getAircraftReg(flightInfo) &&
                    <Route path="/flight-tracker"
                           element={<FlightTracker planeRegistration={flightInfo.apiData[0].aircraft.reg}/>}
                    />
                }

            </Routes>


        </main>

    )
}

export default Content;