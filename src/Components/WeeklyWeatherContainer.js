import React, { Component } from "react";
import APIHelper from "../helpers/apiHelper";
import WeatherCard from "./WeatherCard";
import RiseAndSet from "./SunriseAndSet";
import { LoadingSpinner } from "./Loader";
import HourlyWeather from "./HourlyWeather";
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
        API.getWithHeaders(`/${key}/${lat},${long}?units=${unit}`)
            .then(data => {
                // console.log("API data: ", data)
                this.setState({
                    isLoaded: true,
                    timeZone: data.timezone,
                    currentData: data.currently,
                    todaysData: data.daily.data[0],
                    hourlyData: data.hourly.data,
                    dailyData: data.daily.data
                })
            }).catch(error => {
                console.log("Sorry, there was an error: ", error)
                alert("Sorry, it seems like there was an error retreiving the weather information. Please try again later!")
            });
    };

    getFormattedHourlyData = () => {
        const hourlyData = this.state.hourlyData;
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);
        tomorrow.setHours(18, 0, 0, 0);
        const biHourlyData = [];
        for (let i = 1; i < hourlyData.length; i += 2) {
            if ((new Date(hourlyData[i].time * 1000)) <= tomorrow) {
                biHourlyData.push(hourlyData[i])
            }
        }
        return biHourlyData;
    };

    render() {
        console.log("State: ", this.state);
        const riseAndSetTimes = {
            sunrise: new Date(this.state.todaysData.sunriseTime * 1000),
            sunset: new Date(this.state.todaysData.sunsetTime * 1000)
        };
        const hourlyWeather = this.getFormattedHourlyData().map(weather => <HourlyWeather key={weather.time} data={weather} />);

        if (this.state.isLoaded) {
            return (
                <div className="weekly-weather-container">
                    <WeatherCard data={this.state} />
                    <RiseAndSet data={riseAndSetTimes} />
                    <div className="hourly-weather-container">
                        {hourlyWeather}
                    </div>
                    <div>
                        <h3>Daily Data:</h3>
                    </div>
                </div>
            );
        }
        else {
            return (
                <div className="loading-spinner">
                    <LoadingSpinner />
                    <h3>Loading...</h3>
                </div>
            )
        };
    };
};

export default WeeklyWeatherContainer;