import React,{ useContext } from "react";
import css from "./flightdata.module.css";
import FlightDataCard from "./FlightDataCard/FlightDataCard";
import {FlightContext} from "../../../context/FlightContext";
import SubMenu from "../../Header/SubMenu/SubMenu";




export const FlightData = ({flightInfo, wxInfo}) => {

    const { refreshTime } = useContext(FlightContext).flightInfo;
    const { status: flightStatus, departure, arrival, number:flNumber} = useContext(FlightContext).flightInfo.apiData[0];
    const {reg: acReg, model: acModel} = useContext(FlightContext).flightInfo.apiData[0].aircraft;
    const {name: airline} = useContext(FlightContext).flightInfo.apiData[0].airline;


    return (

        <section className={css['flight-data']}>
            {Object.keys(flightInfo).length > 0 &&
                <>
                    <SubMenu />
                    <div>
                        <h2>{flNumber}</h2> <button>Refresh ({refreshTime})</button>
                    </div>

                    <p>{acModel}</p>
                    <p>{airline}</p>
                    <p>{flightStatus}</p>
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
            {Object.keys(flightInfo).length === 0 &&
                <div>Zoek eerst een vlucht</div>
            }
        </section>
    )
}

export default FlightData;