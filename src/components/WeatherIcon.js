import React from "react";
import "../styles.css";

const WeatherIcon = (props) => {
    return (
        <img
            src={props.source}
            height={props.height}
            alt={props.alt}
        />
    )
}

export default WeatherIcon;