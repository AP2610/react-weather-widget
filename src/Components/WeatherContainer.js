import React, {Component} from "react";
import "../styles.css";

const key = "78ddbb0eef728d7c015c7f1e66d4a626"
const {lat, long} = {lat: 52.370216, long: 4.895168}
const url = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${key}/${lat},${long}`

class WeatherContainer extends Component {
    constructor(){
        super();
        this.state = {
            data: {}
        }
    };

    componentDidMount = () => {
        fetch(url)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            this.setState({data: response})
        })
    }

    render() {
        console.log("Key: ", process.env.API_KEY)
        console.log("State: ", this.state)
        return (
            <div className="weather-container">
                <h2>Weather Forecast</h2>
            </div>
        );
    };
};

export default WeatherContainer;