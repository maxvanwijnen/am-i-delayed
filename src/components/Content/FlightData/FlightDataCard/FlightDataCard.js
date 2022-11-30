import react, {useEffect} from 'react';
import css from './flightdatacard.module.css';

const getTime = (dateTime) => {
    return dateTime.substring(10,16);
}

const FlightDataCard = ({type, flight, wx}) => {

    const { airport, checkInDesk, gate, terminal} = flight;
    const {barometer, clouds, dewpoint, elevation, humidity, icao, observed, temperature, visibility, wind} = wx || {};

    let { actualTimeLocal, actualTimeUtc, scheduledTimeLocal, scheduledTimeUtc} = flight;
    actualTimeUtc = getTime(actualTimeUtc);
    scheduledTimeUtc = getTime(actualTimeUtc);
    actualTimeLocal = getTime(actualTimeLocal);
    scheduledTimeLocal = getTime(scheduledTimeLocal);

    console.log(flight)

    return (

        <div className={css['flightdatacard']}>

            <div className={css['flightdatacard-flight']}>
                <div className={css['data-top']}>
                    <div className={css['iata']}>{airport.iata}</div>
                    <div className={css['location']}>{airport.municipalityName} <span className={css['country-code']}>({airport.countryCode})</span></div>
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
                <div>sdasda</div>

                <div>
                    <div>{actualTimeLocal}</div>
                    <div>Terminal {terminal}</div>
                    {checkInDesk && <div>Checkin: {checkInDesk}</div>}
                    {gate && <div>Gate: {gate}</div>}
                </div>

            </div>
            <div className={css['flightdatacard-wx']}>
                <h3>Weather</h3>
                <div>{temperature.celsius} °C</div>




            </div>


        </div>


    )
}

export default FlightDataCard;