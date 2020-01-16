import React from "react";
import Time from "./Time";
import WeatherIcon from "./WeatherIcon";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTint } from "@fortawesome/free-solid-svg-icons";
import "../styles.css";

// Component houses daily weather data for the following week
const DailyWeather = (props) => {
    return (
        <div className="daily-weather-card flex-center-spacebetween">
            <Time
                className="daily-weather-card-day"
                date={new Date(props.data.time * 1000)}
                format="dddd"
            />
            <WeatherIcon
                source={`./icons/${props.data.icon}.svg`}
                height="50px"
                alt={`${props.data.icon} icon`}
            />
            <div className="daily-weather-card-rain flex-center-spacebetween">
                <FontAwesomeIcon icon={faTint} />
                <p>{Math.round(props.data.precipProbability * 100)}%</p>
            </div>
            <div className="daily-weather-card-temp flex-center-spacearound">
                <p>{props.farenheit ? Math.round(props.data.temperatureMax * 1.8 + 32) : Math.round(props.data.temperatureMax)}°</p>
                <p>{props.farenheit ? Math.round(props.data.temperatureMin * 1.8 + 32) : Math.round(props.data.temperatureMin)}°</p>
            </div>
        </div>
    )
}

export default DailyWeather;