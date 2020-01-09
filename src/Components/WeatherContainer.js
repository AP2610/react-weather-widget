import React, { Component } from "react";
import Time from "./Time";
import "../styles.css";

const key = "78ddbb0eef728d7c015c7f1e66d4a626"
const { lat, long } = { lat: 52.370216, long: 4.895168 }
const url = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${key}/${lat},${long}`

class WeatherContainer extends Component {
    constructor() {
        super();
        this.state = {
            isLoaded: false,
            timeZone: "",
            currentData: {}
        }
    };

    componentDidMount = () => {
        fetch(url)
            .then(response => response.json())
            .then(response => {
                this.setState({
                    isLoaded: true,
                    timeZone: response.timezone,
                    currentData: response.currently 
                })
            })
    }

    render() {
        console.log("State: ", this.state) 
        return (
            <div className="weather-container">
                <h2 className="weather-container-location">{this.state.timeZone}</h2>
                <Time />
                <h3>Summary: {this.state.currentData.summary}</h3>
                <h3>Icon: {this.state.currentData.icon}</h3>
                <h3>Temperature: {this.state.currentData.temperature}</h3>
            </div>
        );
    };
};

export default WeatherContainer;