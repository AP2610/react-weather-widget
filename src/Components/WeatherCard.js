import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMapMarker} from "@fortawesome/free-solid-svg-icons";
import Time from "./Time";
import WeatherIcon from "./WeatherIcon";
import "../styles.css";

const WeatherCard = (props) => {
    return (
        <div className="current-weather-card">
            <div className="current-weather-card-top">
                <div className="current-weather-card-top-location">
                    <FontAwesomeIcon icon={faMapMarker}/>
                    <h3>{props.data.timeZone}</h3>
                </div>
                <div className="current-weather-card-top-date">
                    <Time
                        className="current-weather-card-date-day"
                        date={new Date()}
                        format='ddd MMMM Do HH:mm'
                    />
                </div>
            </div>
            <div className="current-weather-card-middle">
                <WeatherIcon
                    className="current-weather-card-middle-icon"
                    source={`./icons/${props.data.currentData.icon}.svg`}
                />
                <h4 className="current-weather-card-middle-temp"> {Math.round(props.data.currentData.temperature)}°</h4>
            </div>
            <div className="current-weather-card-bottom">
                <p className="current-weather-card-bottom-feels">Feels like: {Math.round(props.data.currentData.apparentTemperature)}°</p>
                <p className="current-weather-card-bottom-summary"> {props.data.currentData.summary}</p>
            </div>
        </div>
    );
};

export default WeatherCard;