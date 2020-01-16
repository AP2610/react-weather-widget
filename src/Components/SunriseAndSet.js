import React from "react";
import Time from "./Time";
import WeatherIcon from "./WeatherIcon";
import "../styles.css";

const RiseAndSet = (props) => {
    return (
        <div className="rise-and-set">
            <div className="flex-flex-end">
                <WeatherIcon source="./icons/sunrise.svg"/>
                <Time
                    className="rise-and-set-sunrise-time"
                    date={props.data.sunrise}
                    format="HH:mm"
                />
            </div>
            <div className="flex-flex-end">
                <WeatherIcon source="./icons/sunset.svg"/>
                <Time
                    className="rise-and-set-sunset-time"
                    date={props.data.sunset}
                    format="HH:mm"
                />
            </div>
        </div>
    );
};

export default RiseAndSet;