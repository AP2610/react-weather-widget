import React from "react";
import Time from "./Time";
import "../styles.css";

const RiseAndSet = (props) => {
    return (
        <div className="weather-card-riseandset">
            <p>Sunrise: </p>
            <Time date={props.sunrise} format={props.format} />
            <p>Sunset: </p>
            <Time date={props.sunset} format={props.format} />
        </div>
    );
};

export default RiseAndSet;