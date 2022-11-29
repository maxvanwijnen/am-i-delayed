import react, {useContext} from 'react';
import css from './headerflightinfo.module.css';
import {FlightContext} from "../../../context/FlightContext";


export const HeaderFlightInfo = ({flightInfo}) => {



    const {status, number: flightId, airline } = useContext(FlightContext).flightInfo.apiData[0];



    return (
        <section className={css['header-flight-info']}>

            <div className={css['flight-id']}>
                {flightId}
                <div className={css['status']}>{status}</div>
            </div>
            <div className={css['airline']}>{airline.name}</div>

        </section>
    )
}

export default HeaderFlightInfo;