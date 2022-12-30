import React, {createContext, useContext, useState} from 'react';
import {useEffect} from "react";
import {useNavigate} from "react-router";
import {fetchFlightData} from "../api/getFllights";
import axios from "axios";
import {AuthContext} from "./AuthContext";

export const FlightContext = createContext({});

export const FlightContextProvider = ({ children }) => {

    const { auth } = useContext(AuthContext);

    const navigate = useNavigate();
    const [flight, setFlight] = useState({
        flightId:'',
        lastRefresh:'',
        searchError: '',
    });
    const [flightInfo, setFlightInfo] = useState({});

    const [wx, setWx] = useState({});



    useEffect(()=> {
        if(auth.isAuth){
            if (flight.flightId.length > 0) {
                fetchFlightData(flight.flightId,setFlightInfo, flightInfo);
            }
            else{
                setFlightInfo({})
            }
        }
        else {
            setFlightInfo({
                ...flightInfo,
                searchError: 'Please login  first',
            })
        }

    },[flight]);

    //Als flightinfo  wordt geupdate, dan het weer opnieuw ophalen
    useEffect(()=> {
        if(flightInfo.apiData){


            const depIcao = flightInfo.apiData[0].departure.airport.icao;
            const arrIcao = flightInfo.apiData[0].arrival.airport.icao;

            const testMode = false;

            async function fetchWXData(IcaoCodeDep, IcaoCodeArr){

                const options = {
                    headers: {'X-API-Key': 'cc13c7e73d2242d796c396c518'}
                };

                try {

                    let respDep = {};
                    let respArr = {};

                    if (!testMode){
                        respDep = await axios.get(`https://api.checkwx.com/metar/${IcaoCodeDep}/decoded`, options)
                        respArr = await axios.get(`https://api.checkwx.com/metar/${IcaoCodeArr}/decoded`, options)

                        const Wx = {
                            dep: respDep.data.data[0],
                            arr: respArr.data.data[0]
                        }
                        setWx(Wx);
                    }
                    else {
                        const Wx = {
                            "dep": {
                                "barometer": {
                                    "hg": 29.97,
                                    "hpa": 1015,
                                    "kpa": 101.49,
                                    "mb": 1014.92
                                },
                                "ceiling": {
                                    "base_feet_agl": 4900,
                                    "base_meters_agl": 1494,
                                    "code": "BKN",
                                    "feet": 4900,
                                    "meters": 1494,
                                    "text": "Broken"
                                },
                                "clouds": [
                                    {
                                        "base_feet_agl": 1900,
                                        "base_meters_agl": 579,
                                        "code": "FEW",
                                        "feet": 1900,
                                        "meters": 579,
                                        "text": "Few"
                                    },
                                    {
                                        "base_feet_agl": 4900,
                                        "base_meters_agl": 1494,
                                        "code": "BKN",
                                        "feet": 4900,
                                        "meters": 1494,
                                        "text": "Broken"
                                    }
                                ],
                                "conditions": [
                                    {
                                        "code": "RA",
                                        "prefix": "-",
                                        "text": "Light Rain"
                                    },
                                    {
                                        "code": "DZ",
                                        "prefix": "-",
                                        "text": "Light Drizzle"
                                    }
                                ],
                                "dewpoint": {
                                    "celsius": 9,
                                    "fahrenheit": 48
                                },
                                "elevation": {
                                    "feet": -7,
                                    "meters": -2
                                },
                                "flight_category": "VFR",
                                "humidity": {
                                    "percent": 88
                                },
                                "icao": "EHAM",
                                "observed": "2022-09-18T15:55Z",
                                "raw_text": "EHAM 181555Z 35006KT 300V060 9999 -RADZ FEW019 BKN049 11/09 Q1015 TEMPO 35015G25KT 4000 SHRA SCT025CB",
                                "station": {
                                    "geometry": {
                                        "coordinates": [
                                            4.76389,
                                            52.308601
                                        ],
                                        "type": "Point"
                                    },
                                    "location": "Amsterdam, NL",
                                    "name": "Amsterdam Airport Schiphol",
                                    "type": "Airport"
                                },
                                "temperature": {
                                    "celsius": 11,
                                    "fahrenheit": 52
                                },
                                "visibility": {
                                    "meters": "10,000+",
                                    "meters_float": 9999,
                                    "miles": "Greater than 6",
                                    "miles_float": 6.21
                                },
                                "wind": {
                                    "degrees": 350,
                                    "speed_kph": 11,
                                    "speed_kts": 6,
                                    "speed_mph": 7,
                                    "speed_mps": 3
                                }
                            },
                            "arr": {
                                "barometer": {
                                    "hg": 29.94,
                                    "hpa": 1014,
                                    "kpa": 101.39,
                                    "mb": 1013.92
                                },
                                "clouds": [
                                    {
                                        "base_feet_agl": 2900,
                                        "base_meters_agl": 884,
                                        "code": "FEW",
                                        "feet": 2900,
                                        "meters": 884,
                                        "text": "Few"
                                    }
                                ],
                                "dewpoint": {
                                    "celsius": 18,
                                    "fahrenheit": 64
                                },
                                "elevation": {
                                    "feet": 85,
                                    "meters": 26
                                },
                                "flight_category": "VFR",
                                "humidity": {
                                    "percent": 58
                                },
                                "icao": "LEAL",
                                "observed": "2022-09-18T16:00Z",
                                "raw_text": "LEAL 181600Z 08017KT 9999 FEW029 27/18 Q1014 NOSIG",
                                "station": {
                                    "geometry": {
                                        "coordinates": [
                                            -0.558156,
                                            38.2822
                                        ],
                                        "type": "Point"
                                    },
                                    "location": "Alicante, ES",
                                    "name": "Alicante-Elche Miguel Hernández Airport",
                                    "type": "Airport"
                                },
                                "temperature": {
                                    "celsius": 27,
                                    "fahrenheit": 81
                                },
                                "visibility": {
                                    "meters": "10,000+",
                                    "meters_float": 9999,
                                    "miles": "Greater than 6",
                                    "miles_float": 6.21
                                },
                                "wind": {
                                    "degrees": 80,
                                    "speed_kph": 31,
                                    "speed_kts": 17,
                                    "speed_mph": 20,
                                    "speed_mps": 9
                                }
                            }
                        }
                        setWx(Wx);

                    }



                }
                catch (e) {

                }

            }
            fetchWXData(depIcao,arrIcao);
            navigate('/');
        }

    },[flightInfo])



    const updateFlightId = (flightId) => {
        setFlight({
            ...flight,
            flightId: flightId
        })
    }

    const removeFlightId = () => {
        setFlight({
            ...flight,
            flightId:''
        })
    }
    const refreshFlight = () => {
        setFlight({
            ...flight
        })
    }


    const data = {
        flightId:flight.flightId,

        flightInfo:{...flightInfo},
        wx:{...wx},

        refreshFlight:refreshFlight,
        updateFlightId:updateFlightId,
        removeFlightId:removeFlightId
        
    }


    return (
       <FlightContext.Provider value={data}>
           { children }
       </FlightContext.Provider>
    )
}