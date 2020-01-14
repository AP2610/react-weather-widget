import React from "react";
import Time from "./Time";
import WeatherIcon from "./WeatherIcon";
import "../styles.css";

const RiseAndSet = (props) => {
    return (
        <div className="rise-and-set">
            <div className="rise-and-set-sunrise">
                <WeatherIcon source="./icons/sunrise.svg"/>
                <Time
                    className="rise-and-set-sunrise-time"
                    date={props.sunrise}
                    format={props.format}
                />
            </div>
            <div className="rise-and-set-sunset">
                <WeatherIcon source="./icons/sunset.svg"/>
                <Time
                    className="rise-and-set-sunset-time"
                    date={props.sunset}
                    format={props.format}
                />
            </div>
        </div>
    );
};

export default RiseAndSet;