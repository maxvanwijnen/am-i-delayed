import React, {useContext, useEffect, useState} from 'react';
import SubMenu from "../../Header/SubMenu/SubMenu";
import axios from "axios";
import { getCurrentDateString } from "../../../functions/getCurrentDateString";
import { getTestFlightTrackerObject } from './../../../functions/getTestFlightTrackerObject';
import { FlightTrackerCard } from './FlightTrackerCard/FlightTrackerCard';
import css  from './flighttracker.module.css';
import {FlightContext} from "../../../context/FlightContext";


export const FlightTracker = ({planeRegistration}) => {

    const [flightsArray, setFlightsArray] = useState();
    const [reg, setReg] = useState();
    const { testMode } = useContext(FlightContext);



    const getFlights = async (testMode) => {

        if (testMode) {

            const filteredArray = getTestFlightTrackerObject().data.filter(fl => fl.codeshareStatus === "IsOperator");
            setFlightsArray(filteredArray.reverse());

            return;
        }


        const options = {
            method: 'GET',
            url: `https://aerodatabox.p.rapidapi.com/flights/reg/${planeRegistration}/${getCurrentDateString()}`,
            params: {withAircraftImage: 'false', withLocation: 'false'},
            headers: {
                'X-RapidAPI-Key': process.env.REACT_APP_FLIGHT_API_KEY,
                'X-RapidAPI-Host': 'aerodatabox.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options);

            const filteredArray = response.data.filter(fl => fl.codeshareStatus === "IsOperator");
            setFlightsArray(filteredArray.reverse());
        } catch (error) {

            console.error(error);
        }
    }



    useEffect(()=> {
        getFlights(testMode);
    },[])



    return (
        <section className={css['flight-tracker']}>
            <SubMenu />
            { flightsArray ? flightsArray.map((fl) => (<FlightTrackerCard key={fl.number} fl={fl} />)):<div>Loading..</div>}

        </section>
    )
}
export default FlightTracker;