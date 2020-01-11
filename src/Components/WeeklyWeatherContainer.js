import React, { Component } from "react";
import APIHelper from "../helpers/apiHelper";
import WeatherCard from "./WeatherCard";
import RiseAndSet from "./SunriseAndSet";
import "../styles.css";

class WeeklyWeatherContainer extends Component {
    constructor() {
        super();
        this.state = {
            isLoaded: false,
            timeZone: "",
            currentData: {},
            todaysData: {},
            hourlyData: {},
            dailyData: {}
        }
    };

    componentDidMount = () => {
        // API parameters
        const { lat, long, key, unit } = { lat: 52.370216, long: 4.895168, key: "78ddbb0eef728d7c015c7f1e66d4a626", unit: "auto" };

        // Fetching the data using a helper class to abstract fetch logic
        const API = new APIHelper();
        API.setBaseUrl("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/");
        API.get(`/${key}/${lat},${long}?units=${unit}`)
            .then(data => {
                // console.log(data)
                this.setState({
                    isLoaded: true,
                    timeZone: data.timezone,
                    currentData: data.currently,
                    todaysData: data.daily.data[0],
                    hourlyData: data.hourly.data,
                    dailyData: data.daily.data
                })
            }).catch(error => {
                alert("Sorry, it seems like there was an error retreiving the weather information. Please try again later!")
                console.log("Sorry, there was an error: ", error)
            });
    };

    // formatTime = (timestamp) => {
    //     const date = new Date(timestamp * 1000);
    //     const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    //     const dayName = days[date.getDay()];
    //     const hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
    //     const minutes = date.getMinutes()
    //     const time = `${hours}:${minutes}`
    //     return {
    //         dayName,
    //         hours,
    //         minutes,
    //         time
    //     }
    // }

    render() {
        console.log("State: ", this.state)
        const sunrise = new Date(this.state.todaysData.sunriseTime * 1000)
        const sunset = new Date(this.state.todaysData.sunsetTime * 1000)
        return (
            <>
                <WeatherCard
                    timeZone={this.state.timeZone}
                    date={new Date()}
                    iconSrc={`./icons/${this.state.currentData.icon}.svg`}
                    currentTemperature={this.state.currentData.temperature}
                    currentSummary={this.state.currentData.summary}
                    feelsLikeTemperature={this.state.currentData.apparentTemperature}
                />
                <RiseAndSet
                    sunrise={sunrise}
                    sunset={sunset}
                    format="HH:mm"
                />
            </>
        );
    };
};

export default WeeklyWeatherContainer;