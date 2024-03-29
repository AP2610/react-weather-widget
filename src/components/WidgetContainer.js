import React, { Component } from "react";
import APIHelper from "../helpers/apiHelper";
import CurrentWeatherCard from "./CurrentWeatherCard";
import RiseAndSet from "./SunriseAndSet";
import HourlyWeather from "./HourlyWeather";
import DailyWeather from "./DailyWeather";
import Buttons from "./Button";
import { apikey } from "../helpers/apiKey";
import { LoadingSpinner } from "./Loader";
import "../styles.css";

class WidgetContainer extends Component {
    // Initializes state with empty objects and arrays to popularte relevant API data
    constructor() {
        super();
        this.state = {
            isLoaded: false,
            farenheit: false,
            darkMode: false,
            timeZone: "",
            currentData: {},
            todaysData: {},
            hourlyData: [],
            dailyData: []
        }
    };

    // This function is called within componentDidMount to retrieve API data based on user location. It also sets state. This function is called multiple times within componentDidMount hence the abstraction
    fetchData = (lat, long, key, unit) => {
        // Fetching the API data using a helper class to abstract fetch logic
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
                console.log("Sorry, there was an error: ", error.message)
                alert("Sorry, it seems like there was an error retreiving the weather information. Please try again later!")
            });
    };

    componentDidMount = () => {
        // Default API parameters
        const { lat, long, key, unit } = { lat: 52.370216, long: 4.895168, key: apikey, unit: "si" };

        // Options to pass as 3rd argument to getCurrentPosition()
        const options = {
            enableHighAccuracy: true,
            timeout: 6000
        };
        // Only if the browser has this web API will we retrieve user location and subsequently use it to fetch data. If permission is denied, or request times out, fetchData() takes the default parameters. This Web API takes a while sometime, so perhaps in the future one would include a geocoder as well so that users can search for location if the request timesout.
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(data => {
                console.log("Location permission granted")
                const myLat = data.coords.latitude
                const myLong = data.coords.longitude
                this.fetchData(myLat, myLong, key, unit)
            },
                (error) => {
                    if (error.code === error.PERMISSION_DENIED || error.code === error.TIMEOUT) {
                        console.log("Location permission denied or the request timed out: ", error.message)
                        this.fetchData(lat, long, key, unit)
                    };
                },
                options
            );
        } else {
            this.fetchData(lat, long, key, unit)
        };
    };

    // A function to format api-returned hourly data so that we end up with an array with 2-hour intervals of our api-returened hourly data. Also to format the array from 48-hour data to only until tomorrow 18:00. The returned array will be mapped to a hourlyWeather component.
    getHourlyWeather = () => {
        const hourlyData = this.state.hourlyData;
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);
        tomorrow.setHours(18, 0, 0, 0);
        const biHourlyData = [];
        for (let i = 1; i < hourlyData.length; i += 2) {
            // The API returns hourly-data for 48 hours. I only want data from the following hour, to 18:00 tomorrow. If the time of the given array element is less than "tomorrow", add it to our biHourly array.
            if ((new Date(hourlyData[i].time * 1000)) <= tomorrow) {
                biHourlyData.push(hourlyData[i])
            }
        }
        return biHourlyData;
    };

    // A function to manipulate the daily data array returned from the API. The first element is the current day, so splic is used to exclude this. The returned array will be mapped to a DailyWeather component. 
    getDailyWeather = () => {
        const dailyData = this.state.dailyData;
        const formattedDailyData = dailyData.slice(1, dailyData.length)
        return formattedDailyData;
    };

    // Event handler to handle clicking of unit(i.e. farenheit or celsius) button and dark mode button
    handleClick = (e) => {
        e.target.matches("#button-unit")
            ?
            this.setState(prevState => {
                return {
                    ...prevState,
                    farenheit: !prevState.farenheit
                };
            })
            :
            this.setState(prevState => {
                return {
                    ...prevState,
                    darkMode: !prevState.darkMode
                };
            });
    };

    render() {
        // Sets rise and set times to be passes to RiseAndSet component
        const riseAndSetTimes = {
            sunrise: new Date(this.state.todaysData.sunriseTime * 1000),
            sunset: new Date(this.state.todaysData.sunsetTime * 1000)
        };
        // Mapping from getHourlyWeather to render array of components
        const hourlyWeather = this.getHourlyWeather().map(weather => <HourlyWeather key={weather.time} data={weather} farenheit={this.state.farenheit} />);

        // Mapping from getDailyWeather to render array of components
        const dailyWeather = this.getDailyWeather().map(weather => <DailyWeather key={weather.time} data={weather} farenheit={this.state.farenheit} />);

        // If dark mode is true, add or remove the relevant class
        this.state.darkMode ? document.body.classList.add('dark-mode') : document.body.classList.remove('dark-mode');

        // Renders the Weather Widget only if isLoaded is true (i.e. API has responded 200 with data). Otherwise, renders a loading spinner.
        if (this.state.isLoaded) {
            return (
                <div className="widget-container animated-fade-in">
                    <Buttons
                        handleClick={this.handleClick}
                        toggleDarkMode={this.toggleDarkMode}
                        farenheit={this.state.farenheit}
                        darkMode={this.state.darkMode}
                    />
                    <CurrentWeatherCard
                        data={this.state}
                        farenheit={this.state.farenheit}
                    />
                    <RiseAndSet data={riseAndSetTimes} />
                    <div className="hourly-weather-container">
                        {hourlyWeather}
                    </div>
                    <div className="daily-weather-container">
                        {dailyWeather}
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

export default WidgetContainer;