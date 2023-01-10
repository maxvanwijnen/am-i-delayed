import React from 'react';
import css from './FlightTrackerCard.module.css';

export const FlightTrackerCard = ({fl}) => {
    return (
        <article className={css['flightdata-card']}>
            <h2>{fl.number}</h2>
            <div className={css['status']}>
                {fl.status}
            </div>
            <div className={css['dep-arr-wrapper']}>
                <div className={css['dep-arr']}>
                    <h3>Departure</h3>
                    <div>
                        <h4>{fl.departure.airport.iata}</h4>
                        <h5>{fl.departure.airport.municipalityName}  ({fl.departure.airport.countryCode})</h5>
                        <div>
                            <div>
                                <h6>Departed</h6>
                                {fl.departure.actualTimeLocal}
                            </div>
                            <div>
                                <h6>Scheduled</h6>
                                {fl.departure.scheduledTimeLocal}
                            </div>


                        </div>
                    </div>

                </div>
                <div className={css['dep-arr']}>
                    <h3>Arrival</h3>
                    <div>
                        <h4>{fl.arrival.airport.iata}</h4>
                        <h5>{fl.arrival.airport.municipalityName}  ({fl.arrival.airport.countryCode})</h5>
                        <div>
                            <div>
                                <h6>Departed</h6>
                                {fl.arrival.actualTimeLocal}
                            </div>
                            <div>
                                <h6>Scheduled</h6>
                                {fl.arrival.scheduledTimeLocal}
                            </div>


                        </div>
                    </div>

                </div>
            </div>



        </article>
    )
}

export default FlightTrackerCard;