import React,{ useContext } from "react";
import css from "./flightdata.module.css";
import FlightDataCard from "./FlightDataCard/FlightDataCard";
import {FlightContext} from "../../../context/FlightContext";
import SubMenu from "../../Header/SubMenu/SubMenu";


export const FlightData = ({flightInfo, wxInfo}) => {

    const { refreshFlight } = useContext(FlightContext);
    const { refreshTime } = useContext(FlightContext).flightInfo;
    const { status: flightStatus, departure, arrival, number:flNumber} = useContext(FlightContext).flightInfo.apiData[0];
    const {reg: acReg, model: acModel} = useContext(FlightContext).flightInfo.apiData[0].aircraft;
    const {name: airline} = useContext(FlightContext).flightInfo.apiData[0].airline;

    console.log(wxInfo)

    return (

        <section className={css['flight-data']}>
            {flightInfo.apiData &&
                <>
                    <SubMenu />
                    <div className={css['flight-number-refresh']}>
                        <h2>{flNumber}</h2>
                        <button className={css['refresh-button']} onClick={()=>refreshFlight()}>Refresh ({refreshTime})</button>
                    </div>
                    <div className={css['airline']} >{airline}</div>
                    <div className={css['ac-model']}>{acModel}</div>
                    <div className={css['flight-status']} >{flightStatus}</div>
                    {Object.keys(wxInfo).length > 0 &&
                        <>
                        <div className={css['flight']}>
                            <FlightDataCard type="departure" flight={departure} wx={wxInfo.dep}/>
                            <FlightDataCard type="arrival" flight={arrival} wx={wxInfo.arr} />
                        </div>

                        </>
                    }
                </>
            }
            {!flightInfo.apiData &&
                <div>Zoek eerst een vlucht</div>
            }
        </section>
    )
}

export default FlightData;