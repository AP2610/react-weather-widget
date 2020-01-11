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
                <h3 className="current-weather-card-middle-temp">Temperature: {props.currentTemperature}</h3>
            </div>
            <div className="current-weather-card-bottom">
                <h3 className="current-weather-card-bottom-summary">Summary: {props.currentSummary}</h3>
                <h3 className="current-weather-card-bottom-feels">Feels like: {props.feelsLikeTemperature}</h3>
            </div>
        </div>
    );
};

export default WeatherCard;