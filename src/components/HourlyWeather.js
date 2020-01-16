import React from "react";
import Time from "./Time";
import WeatherIcon from "./WeatherIcon";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTint } from "@fortawesome/free-solid-svg-icons";
import "../styles.css";

const HourlyWeather = (props) => {
    return (
        <div className="hourly-weather-card flex-column">
            <Time
                id="hourly-weather-card-time"
                date={new Date(props.data.time * 1000)}
                format="HH:mm"
            />
            <div className="hourly-weather-card-temp">
                <WeatherIcon 
                    source={`./icons/${props.data.icon}.svg`}
                    height="40px"
                />
                <p>{props.farenheit ? Math.round(props.data.temperature * 1.8 + 32) : Math.round(props.data.temperature)}°</p>
            </div>
            <div className="hourly-weather-card-rain flex-center-spacearound">
                <FontAwesomeIcon icon={faTint} />
                <p>{Math.round(props.data.precipProbability * 100)}%</p>
            </div>
        </div>
    )
}

export default HourlyWeather;