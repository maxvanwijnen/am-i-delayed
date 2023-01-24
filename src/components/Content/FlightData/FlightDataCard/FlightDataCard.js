import React from 'react';
import css from './flightdatacard.module.css';
import {getWind} from "../../../../functions/getWind";
import {getPrecipitation} from "../../../../functions/getPrecepition";
import {getTime} from "../../../../functions/getTime";


const FlightDataCard = ({type, flight, wx}) => {

    const { airport, checkInDesk, gate, terminal } = flight;
    const  {temperature, wind, conditions} = wx || {};

    let { actualTimeLocal, scheduledTimeLocal} = flight;


    actualTimeLocal = getTime(actualTimeLocal);
    scheduledTimeLocal = getTime(scheduledTimeLocal);




    //Sommige airports geven geen municipalityname en iataCode terug
    //Als dat het geval  is, dan het name veld gebruiken
    if (!airport.municipalityName){
        airport.municipalityName = airport.name;
    }
    if (!airport.iata){
        airport.iata = airport.name;
    }



    return (

        <div className={css['flightdatacard']}>

            <div className={css['flightdatacard-flight']}>
                <div className={css['data-top']}>
                    <div className={css['iata']}>{airport.iata}</div>
                    <div className={css['location']}>{airport.municipalityName} {airport.countryCode && <span className={css['country-code']}>({airport.countryCode})</span>}
                    </div>
                </div>
                <div className={css['data-center']}>
                    <div className={css['actual']}>
                        {actualTimeLocal}
                        <div className={css['label']}>actual</div>
                    </div>
                    <div className={css['scheduled']}>
                        {scheduledTimeLocal}
                        <div className={css['label']}>scheduled</div>
                    </div>
                </div>


                <div className={css['terminal-info']}>
                    <ul>
                        <li>Terminal {terminal}</li>
                        {checkInDesk && <li>Checkin: {checkInDesk}</li>}
                        {gate && <li>Gate: {gate}</li>}
                    </ul>
                </div>

            </div>
            <div className={css['flightdatacard-wx']}>
                <h3>Weather</h3>
                <ul>
                    <li>Temp: {temperature.celsius} °C</li>
                    <li>Wind: {getWind(wind.degrees,wind.speed_kph)}</li>
                    <li>Precipitation: {getPrecipitation(conditions)}</li>
                </ul>

            </div>


        </div>


    )
}

export default FlightDataCard;