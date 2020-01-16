import React from "react";
import Moment from "react-moment";
import "../styles.css";

// Component houses a component of Moment which provides an easy way to format date/time
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