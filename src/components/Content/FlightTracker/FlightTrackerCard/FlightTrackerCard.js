import React from 'react';
import css from './FlightTrackerCard.module.css';
import {renderApiValue} from "../../../../functions/renderApiValue";
import {AirportData} from "./AirportData/AirportData";


export const FlightTrackerCard = ({fl}) => {

    let cssStatus;
    switch (fl.status) {
        case 'Arrived':
            cssStatus = css.arrived;
            break;
        case 'Expected':
            cssStatus = css.expected;
            break;
        case 'Boarding':
            cssStatus = css.boarding;
            break;
        default:
            cssStatus  = css.defaultstatus;
            break;

    }
    return (
        <article className={`${css['flightdata-card']} ${cssStatus}`}>
            <h2>{renderApiValue(fl.number)}</h2>
            <div className={css['status']}>
                {renderApiValue(fl.status)}
            </div>
            <div className={css['dep-arr-wrapper']}>
                <AirportData fl={fl.departure} type="departure" />
                <AirportData fl={fl.arrival} type="arrival" />
            </div>



        </article>
    )
}

export default FlightTrackerCard;