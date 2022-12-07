import React, { useState } from 'react';
import SubMenu from "../../Header/SubMenu/SubMenu";
import axios from "axios";


export const FlightTracker = ({planeRegistration}) => {

    const [flightsArray, setFlightsArray] = useState();

    const options = {
        method: 'GET',
        url: `https://aerodatabox.p.rapidapi.com/flights/reg/${planeRegistration}/2022-12-07`,
        params: {withAircraftImage: 'false', withLocation: 'false'},
        headers: {
            'X-RapidAPI-Key': '78a9fb5495msh045e43a0f97431ap1dfa12jsn8cadd93e92f2',
            'X-RapidAPI-Host': 'aerodatabox.p.rapidapi.com'
        }
    };

    axios.request(options).then(function (response) {
        setFlightsArray(response.data);

    }).catch(function (error) {
        console.log('kwam er een error?')
        console.error(error);
    });




    return (
        <section>
            <SubMenu />
            { flightsArray.map((fl) => (<div key={fl.number}>From {fl.departure.airport.name} To {fl.arrival.airport.name}</div>)

            )}

        </section>
    )
}
export default FlightTracker;