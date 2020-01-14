import React from "react";
import Time from "./Time";
import WeatherIcon from "./WeatherIcon";
import "../styles.css";

const WeatherCard = (props) => {
    return (
        <div className="current-weather-card">
            <div className="current-weather-card-top">
                <div>
                    <i class="fas fa-map-marker-alt"></i>
                    <h2 className="current-weather-card-top-location">{props.timeZone}</h2>
                </div>
                <div className="current-weather-card-top-date">
                    <Time
                        className="current-weather-card-date-day"
                        date={props.date}
                        format='ddd MMMM Do HH:mm'
                    />
                </div>
            </div>
            <div className="current-weather-card-middle">
                <WeatherIcon
                    className="current-weather-card-middle-icon"
                    source={props.iconSrc}
                />
                <h4 className="current-weather-card-middle-temp"> {Math.round(props.currentTemperature)}°</h4>
            </div>
            <div className="current-weather-card-bottom">
                <p className="current-weather-card-bottom-feels">Feels like: {Math.round(props.feelsLikeTemperature)}°</p>
                <p className="current-weather-card-bottom-summary"> {props.currentSummary}</p>
            </div>
        </div>
    );
};

export default WeatherCard;