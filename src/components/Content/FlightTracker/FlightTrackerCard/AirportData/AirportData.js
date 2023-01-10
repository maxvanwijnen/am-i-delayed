import css from  './AirportData.module.css';
import React from 'react';
import {renderApiValue} from "../../../../../functions/renderApiValue";

export const AirportData = ({fl, type}) => {

    let event;
    switch (type){
        case 'departure':
            event = 'Departed'
            break;
        case 'arrival':
            event = 'Arrived'
            break;
    }


    return (
        <div className={css['airport-data']}>
            <h3>{type}</h3>
            <div>
                <h4>{renderApiValue(fl.airport.iata)}</h4>
                <h5>{renderApiValue(fl.airport.municipalityName)}  ({renderApiValue(fl.airport.countryCode)})</h5>
                <div>
                    <div>
                        <h6>{event}</h6>
                        {renderApiValue(fl.actualTimeLocal)}
                    </div>
                    <div>
                        <h6>Scheduled</h6>
                        {renderApiValue(fl.scheduledTimeLocal)}
                    </div>
                </div>
            </div>
        </div>
    )
}