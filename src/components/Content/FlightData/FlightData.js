import React,{ useContext } from "react";
import css from "./flightdata.module.css";
import FlightDataCard from "./FlightDataCard/FlightDataCard";
import {FlightContext} from "../../../context/FlightContext";
import SubMenu from "../../Header/SubMenu/SubMenu";
import {TimestampToDateTime} from "../../../functions/TimestampToDateTime";
import EmptyPageMessage from "../../EmptyPageMessage/EmptyPageMessage";


export const FlightData = ({wxInfo}) => {

    const flightContext = useContext(FlightContext);
    const { refreshFlight } = flightContext;
    const { refreshTime } = flightContext.flightInfo;

    if(!flightContext.flightInfo.apiData || flightContext.flightInfo.apiData.length === 0)
        return (
          <EmptyPageMessage title="Let's find your flight!">
              Please enter your flightnumber in the searchbar and hit search to get started!
          </EmptyPageMessage>
    );

    const { status: flightStatus, departure, arrival, number:flNumber} = flightContext.flightInfo.apiData[0];
    const {reg: acReg, model: acModel} = flightContext.flightInfo.apiData[0].aircraft;
    const {name: airline} = flightContext.flightInfo.apiData[0].airline;

    return (
        <section className={css['flight-data']}>
            <SubMenu />
            <div className={css['flight-number-refresh']}>
                <h2>{flNumber}</h2>
                <button className={css['refresh-button']} onClick={()=>refreshFlight()}>
                    <div className={css['label']}>Refresh</div>
                    <div className={css['descr']}>(Last update: {TimestampToDateTime(refreshTime)})</div>
                </button>
            </div>
            <div className={css['airline']} >{airline}</div>
            <div className={css['ac-model']}>{acModel}</div>
            <div className={css['flight-status']} >{flightStatus}</div>
            {Object.keys(wxInfo).length > 0 &&
                <>
                    <div className={css['flight']}>
                        <FlightDataCard type="departure" flight={departure} wx={wxInfo.dep}/>
                        <img src="/img/plane-on-route.png" className={css['plane-img']} alt="plane icon" />
                        <FlightDataCard type="arrival" flight={arrival} wx={wxInfo.arr} />
                    </div>
                </>
            }
        </section>
    )
}

export default FlightData;
