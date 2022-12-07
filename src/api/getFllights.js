import react from 'react';

import axios from "axios";



export const fetchFlightData = async (flightId, setFlightInfo, flightInfo) => {

        let apiData = {};
        const testMode = false;

        let today = new Date();
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0');
        const yyyy = today.getFullYear();
        today = `${yyyy}-${mm}-${dd}`;

        if(!testMode) {
            const options = {
                method: 'GET',
                url: `https://aerodatabox.p.rapidapi.com/flights/number/${flightId}/${today}`,
                headers: {
                    'X-RapidAPI-Key': '78a9fb5495msh045e43a0f97431ap1dfa12jsn8cadd93e92f2',
                    'X-RapidAPI-Host': 'aerodatabox.p.rapidapi.com'
                }
            };

            axios.request(options).then(function (response) {

                apiData = response.data;

                console.log('krijg ik mooi data teru')
                console.log(apiData)
                if (apiData) {
                    setFlightInfo({
                        ...flightInfo,
                        refreshTime: Date.now(),
                        apiData
                    });
                }
                else {
                    setFlightInfo({
                        searchError:'Flight unknown'
                    })
                    console.log('dit gaat helemaal fout')

                }


            }).catch(function (error) {
                setFlightInfo({})
                console.log('dit gaat helemaal fout')
                console.error(error);
            });
        }
        else {
            apiData = [
                {
                    "greatCircleDistance": {
                        "meter": 1614949.94,
                        "km": 1614.95,
                        "mile": 1003.483,
                        "nm": 872.003,
                        "feet": 5298392.2
                    },
                    "departure": {
                        "airport": {
                            "icao": "EHAM",
                            "iata": "AMS",
                            "name": "Amsterdam, Amsterdam Schiphol",
                            "shortName": "Schiphol",
                            "municipalityName": "Amsterdam",
                            "location": {
                                "lat": 52.3086,
                                "lon": 4.763889
                            },
                            "countryCode": "NL"
                        },
                        "scheduledTimeLocal": "2022-08-28 18:30+02:00",
                        "actualTimeLocal": "2022-08-28 18:30+02:00",
                        "scheduledTimeUtc": "2022-08-28 16:30Z",
                        "actualTimeUtc": "2022-08-28 16:30Z",
                        "terminal": "1",
                        "checkInDesk": "2-3",
                        "gate": "C18",
                        "quality": [
                            "Basic",
                            "Live"
                        ]
                    },
                    "arrival": {
                        "airport": {
                            "icao": "LEAL",
                            "iata": "ALC",
                            "name": "Alicante",
                            "shortName": "Alicante",
                            "municipalityName": "Alicante",
                            "location": {
                                "lat": 38.2822,
                                "lon": -0.558156
                            },
                            "countryCode": "ES"
                        },
                        "scheduledTimeLocal": "2022-08-28 21:10+02:00",
                        "actualTimeLocal": "2022-08-28 21:10+02:00",
                        "scheduledTimeUtc": "2022-08-28 19:10Z",
                        "actualTimeUtc": "2022-08-28 19:10Z",
                        "terminal": "N",
                        "quality": [
                            "Basic",
                            "Live"
                        ]
                    },
                    "lastUpdatedUtc": "2022-08-28 00:23Z",
                    "number": "HV 6153",
                    "status": "Expected",
                    "codeshareStatus": "IsOperator",
                    "isCargo": false,
                    "aircraft": {
                        "reg": "LY-DUE",
                        "modeS": "503D3E",
                        "model": "Boeing 737-800"
                    },
                    "airline": {
                        "name": "Transavia"
                    }
                }
            ];
            setFlightInfo({
                ...flightInfo,
                refreshTime:Date.now(),
                apiData
            });

        }



}

export default fetchFlightData();