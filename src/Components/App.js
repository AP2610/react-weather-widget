import React, {Component} from "react";
import WidgetContainer from "./WidgetContainer";
import "../styles.css";

class App extends Component {
  render() {
    return (
        <div className="app-container animated-fade-in">
            <WidgetContainer />
        </div>
    );
  };
};

export default App;