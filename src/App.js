import React, {Component} from "react";
import WeeklyWeatherContainer from "./components/WeeklyWeatherContainer";
import "./styles.css";

class App extends Component {
  render() {
    return (
        <div className="app-container animated-fade-in">
            <WeeklyWeatherContainer />
        </div>
    );
  };
};

export default App;