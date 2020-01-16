import React from "react";
import "../styles.css";

// This component creates Icons to use throughout the widget
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