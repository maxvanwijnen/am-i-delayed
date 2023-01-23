import axios from "axios";
import { getTestFlightObject } from "../functions/getTestFlightObject";
import { getCurrentDateString } from "../functions/getCurrentDateString";


export const fetchFlightData = async (flightId, setFlightInfo, flightInfo, testMode) => {


        let apiData = {};


        if (testMode){
            apiData = getTestFlightObject();
            setFlightInfo({
                ...flightInfo,
                refreshTime:Date.now(),
                apiData
            });
            return;
        }


            const options = {
                method: 'GET',
                url: `https://aerodatabox.p.rapidapi.com/flights/number/${flightId}/${getCurrentDateString()}`,
                headers: {
                    'X-RapidAPI-Key': process.env.REACT_APP_FLIGHT_API_KEY,
                    'X-RapidAPI-Host': 'aerodatabox.p.rapidapi.com'
                }
            };

    try {

        const response = await axios.request(options);
        apiData = response.data;

        if (apiData) {
            setFlightInfo({
                ...flightInfo,
                refreshTime: Date.now(),
                apiData
            });
        }
        else {
            setFlightInfo({
                searchError:'Flight not found'
            })


        }



    } catch (error) {
        setFlightInfo({})

    }

}

export default fetchFlightData();