import './App.css';
import React, {useContext} from  'react';
import {FlightContext} from "./context/FlightContext";
import { Header } from './components/Header/Header';
import { Content } from './components/Content/Content';
import Footer from './components/Footer/Footer';



const App = () => {

    const {flightInfo} = useContext(FlightContext);

    return (
        <>
            <Header
                flightInfo={flightInfo}
            />
           <Content />
            <Footer />
        </>
    )
}



export default App;
