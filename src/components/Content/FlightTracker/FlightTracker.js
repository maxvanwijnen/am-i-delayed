import React, {useEffect, useState} from 'react';
import SubMenu from "../../Header/SubMenu/SubMenu";
import axios from "axios";
import { getCurrentDateString } from "../../../functions/getCurrentDateString";
import { getTestFlightTrackerObject } from './../../../functions/getTestFlightTrackerObject';
import { FlightTrackerCard } from './FlightTrackerCard/FlightTrackerCard';
import css  from './flighttracker.module.css';


export const FlightTracker = ({planeRegistration}) => {

    const [flightsArray, setFlightsArray] = useState();
    const [reg, setReg] = useState();
    console.log('ppppppppppp')


    const getFlights = async (testMode) => {

        if (testMode) {
            console.log('daaro?')
            console.log(getTestFlightTrackerObject().data)

            const filteredArray = getTestFlightTrackerObject().data.filter(fl => fl.codeshareStatus === "IsOperator");
            setFlightsArray(filteredArray);

            return;
        }



        const options = {
            method: 'GET',
            url: `https://aerodatabox.p.rapidapi.com/flights/reg/${planeRegistration}/${getCurrentDateString()}`,
            params: {withAircraftImage: 'false', withLocation: 'false'},
            headers: {
                'X-RapidAPI-Key': '78a9fb5495msh045e43a0f97431ap1dfa12jsn8cadd93e92f2',
                'X-RapidAPI-Host': 'aerodatabox.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options);
            console.log('response')
            console.log(response);
            setFlightsArray(response.data);
        } catch (error) {
            console.log('kwam er een error?');
            console.error(error);
        }
    }



    getFlights(false);





    console.log('hiero')
    console.log(flightsArray)




    return (
        <section className={css['flight-tracker']}>
            <SubMenu />
            { flightsArray ? flightsArray.map((fl) => (<FlightTrackerCard key={fl.number} fl={fl} />)):<div>Loading..</div>}

        </section>
    )
}
export default FlightTracker;