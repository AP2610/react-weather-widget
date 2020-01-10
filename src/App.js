import React, {Component} from "react";
import "./styles.css";
import Header from "./components/Header";
import WeeklyWeatherContainer from "./components/WeeklyWeatherContainer";

class App extends Component {
  render() {
    return (
        <>
            <Header />
            <WeeklyWeatherContainer />
        </>
    );
  };
};

export default App;