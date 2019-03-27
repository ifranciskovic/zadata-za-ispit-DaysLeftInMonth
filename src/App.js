import React, { Component } from "react";
import "./App.css";

import Header from "./components/Header";
import Today from "./components/Today";
import Days from "./components/Days";

class App extends Component {
  state = {
    title: "2. ZADATAK",
    description: "PROVERA ZNANJA",
  };
  render() {
    var dateNow = new Date();
    var options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    };
    let todayDay = dateNow.toLocaleString("sr-latn", options);
    // let todayDayInMonth = dateNow.getDate();
    // let thisMonthDays = 32 - new Date(2019, 3, 32).getDate();
    // let remainingDays = thisMonthDays - todayDayInMonth;

    // console.log(remainingDays);

    return (
      <div className="App">
        <Header title={this.state.title} description={this.state.description} />
        <Today today={todayDay} />
        <Days />
      </div>
    );
  }
}

export default App;
