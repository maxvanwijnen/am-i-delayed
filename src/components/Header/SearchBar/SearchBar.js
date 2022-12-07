import React, { useState, useContext } from "react";
import {FlightContext} from "../../../context/FlightContext";
import css from './searchbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'




export const SearchBar = () => {

    const [searchQuery, setSearchQuery] = useState('')
    const {updateFlightId, flightInfo} = useContext(FlightContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        updateFlightId(searchQuery);
    }

    return (
        <form onSubmit={handleSubmit} className={css['search-bar']} >
            <span className={css['search-title']}>Find your flight</span>
            <div className={css['search-query-wrapper']}>
                <input
                    type="text"
                    id="search-bar"
                    onChange={(e) =>  {setSearchQuery(e.target.value)}}
                    className={css['search-field']}
                    placeholder="Enter your flightnumber"
                />

                <button type="submit">
                    <FontAwesomeIcon icon={faMagnifyingGlass} className={css['search-icon']}/>
                    <span className={css['search-text']}>Search</span>
                </button>
            </div>
            {
                flightInfo.searchError &&
                <div className={css['search-error']}>{flightInfo.searchError}</div>
            }

        </form>
    )
}

export default SearchBar;