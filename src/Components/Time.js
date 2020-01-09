import React from "react";
import Moment from "react-moment";
import "../styles.css";

const Time = () => {
    return (
        <>
            <Moment className="weather-container-day" format='MMMM Do' /> <br />
            <Moment className="weather-container-time" format='h:m A' />
        </>
    );
};

export default Time;