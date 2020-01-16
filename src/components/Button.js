import React from "react";
import "../styles.css";

const Buttons = (props) => {
    return (
        <div className="buttons flex-center-spacebetween">
            <button 
                id="button-unit"
                className="button-top" 
                type="button" 
                onClick={props.handleClick}
            >    
                {props.farenheit ? "°C" : "°F"}
            </button>
            <button 
                id="button-dark-or-light"
                className="button-top" 
                type="button" 
                onClick={props.handleClick}
            >
                {props.darkMode ? "Light" : "Dark"}
            </button>
        </div>
    );
};

export default Buttons;