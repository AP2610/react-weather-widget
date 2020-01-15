import React from "react";
import Moment from "react-moment";
import "../styles.css";

const Time = (props) => {
    return (
        <>
            <Moment
                id="time"
                className={props.className} 
                date={props.date} 
                format={props.format} 
            />
        </>
    );
};

export default Time;