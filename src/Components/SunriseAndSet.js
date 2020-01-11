import React from "react";
import Time from "./Time";
import "../styles.css";

const RiseAndSet = (props) => {
    return (
        <div className="weather-card-riseandset">
            <h3>Sunrise: </h3>
            <Time date={props.sunrise} format={props.format} />
            <h3>Sunset: </h3>
            <Time date={props.sunset} format={props.format} />
        </div>
    );
};

export default RiseAndSet;