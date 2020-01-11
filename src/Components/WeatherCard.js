import React from "react";
import Time from "./Time";
import WeatherIcon from "./WeatherIcon";
import "../styles.css";

const WeatherCard = (props) => {
    return (
        <div className="current-weather-card">
            <div className="current-weather-card-top">
                <h2 className="current-weather-card-top-location">{props.timeZone}</h2>
                <div className="current-weather-card-top-date">
                    <Time
                        className="current-weather-card-date-day"
                        date={props.date}
                        format='MMMM Do'
                    />
                    <Time
                        className="current-weather-card-date-time"
                        date={props.date}
                        format='HH:mm A'
                    />
                </div>
            </div>
            <div className="current-weather-card-middle">
                <WeatherIcon
                    className="current-weather-card-middle-icon"
                    source={props.iconSrc}
                />
                <h4 className="current-weather-card-middle-temp"> {Math.round(props.currentTemperature)}°C</h4>
            </div>
            <div className="current-weather-card-bottom">
                <p className="current-weather-card-bottom-feels">Feels like: {props.feelsLikeTemperature}</p>
                <p className="current-weather-card-bottom-summary"> {props.currentSummary}</p>
            </div>
        </div>
    );
};

export default WeatherCard;