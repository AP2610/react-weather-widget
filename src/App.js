import React, {Component} from "react";
import "./styles.css";
import Header from "./Components/Header";
import WeatherContainer from "./Components/WeatherContainer";

class App extends Component {
  render() {
    return (
        <>
            <Header />
            <WeatherContainer />
        </>
    );
  };
};

export default App;