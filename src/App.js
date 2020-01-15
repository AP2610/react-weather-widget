import React, {Component} from "react";
import Header from "./components/Header";
import WeeklyWeatherContainer from "./components/WeeklyWeatherContainer";
import Footer from "./components/Footer";
import "./styles.css";

class App extends Component {
  render() {
    return (
        <div className="app-container">
            <Header />
            <WeeklyWeatherContainer />
            <Footer />
        </div>
    );
  };
};

export default App;