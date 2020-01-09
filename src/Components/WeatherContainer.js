import React, { Component } from "react";
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
            CurrentData: {}
        }
    };

    componentDidMount = () => {
        fetch(url)
            .then(response => response.json())
            .then(response => {
                // console.log("Response: ",response)
                this.setState({
                    isLoaded: true,
                    timeZone: response.timezone,
                    CurrentData: response.currently 
                })
            })
    }

    dateFormatter = () => {
        const days = ["Monday","Tuesday","Wednesday", "Thursday", "Friday"]
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        if (this.state.isLoaded) {
            const UnixTime = this.state.CurrentData.time
            const date = new Date(UnixTime*1000)
            const day = days[date.getUTCDay()]
            const month = months[date.getUTCMonth()]
            console.log(day, month)
        };
    }

    render() {
        console.log("State: ", this.state)
        this.dateFormatter()
        return (
            <div className="weather-container">
                <h2>Weather Forecast</h2>
                <h3>{this.state.timezone}</h3>
                <h4>{}</h4>
            </div>
        );
    };
};

export default WeatherContainer;