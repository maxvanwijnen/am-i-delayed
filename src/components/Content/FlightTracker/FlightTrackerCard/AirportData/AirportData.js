import css from  './AirportData.module.css';
import React from 'react';
import {renderApiValue} from "../../../../../functions/renderApiValue";
import {getTime} from "../../../../../functions/getTime";

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
                        <h6 className={css['label']}>{event}</h6>
                        <div className={css['time']}>{getTime(renderApiValue(fl.actualTimeLocal))}</div>
                    </div>
                    <div>
                        <h6 className={css['label']}>Scheduled</h6>
                        <div className={css['time']}>{getTime(renderApiValue(fl.scheduledTimeLocal))}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}