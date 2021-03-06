import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMapMarker} from "@fortawesome/free-solid-svg-icons";
import Time from "./Time";
import WeatherIcon from "./WeatherIcon";
import "../styles.css";

// Component to display current weather conditions for any given time at the top of the widget. Includes logic to check if farenheit or celsius should be displayed
const CurrentWeatherCard = (props) => {
    return (
        <div className="current-weather-card flex-column">
            <div className="current-weather-card-top flex-column">
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
                    alt={`${props.data.currentData.icon} icon`}
                />
                <h4 className="current-weather-card-middle-temp"> {props.farenheit? Math.round(props.data.currentData.temperature* 1.8 + 32) : Math.round(props.data.currentData.temperature)}°</h4>
            </div>
            <div className="current-weather-card-bottom flex-column">
                <p className="current-weather-card-bottom-feels">Feels like: {props.farenheit ? Math.round(props.data.currentData.apparentTemperature * 1.8 + 32) :  Math.round(props.data.currentData.apparentTemperature)}°</p>
                <p className="current-weather-card-bottom-summary"> {props.data.currentData.summary}</p>
            </div>
        </div>
    );
};

export default CurrentWeatherCard;