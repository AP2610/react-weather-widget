import React, { Component } from "react";
import APIHelper from "../helpers/apiHelper";
import Time from "./Time";
import "../styles.css";

class WeeklyWeatherContainer extends Component {
    constructor() {
        super();
        this.state = {
            isLoaded: false,
            timeZone: "",
            todayData: {},
            weeklyData: {}
        }
    };

    componentDidMount = () => {
        // API parameters
        const { lat, long, key, unit } = { lat: 52.370216, long: 4.895168, key: "78ddbb0eef728d7c015c7f1e66d4a626", unit: "auto" };

        // Fetching the data using a helper class to abstract fetch logic
        const API = new APIHelper();
        API.setBaseUrl("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/");
        API.getWithHeaders(`/${key}/${lat},${long}?units=${unit}`)
        .then(data => {
            this.setState({
                isLoaded: true,
                timeZone: data.timezone,
                todayData: data.currently,
                weeklyData: data.daily
            })
        }).catch(error => {
            alert("Sorry, it seems like there was an error retreiving the weather information. Please try again later!")
            console.log("Sorry, there was an error: ", error)
        });
    }

    render() {
        console.log("State: ", this.state) 
        return (
            <div className="weather-container">
                <h2 className="weather-container-location">{this.state.timeZone}</h2>
                <Time />
                <h3>Summary: {this.state.todayData.summary}</h3>
                <h3>Icon: {this.state.todayData.icon}</h3>
                <h3>Temperature: {this.state.todayData.temperature}</h3>
            </div>
        );
    };
};

export default WeeklyWeatherContainer;