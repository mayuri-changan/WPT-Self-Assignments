// 14. Implement the following items in the React Clock app
//  Update the time(hh:mm:ss) using State and Lifecycle methods
//  Add a close function non each rendered clock component
//  Assign background color of rendered clock components based on AM, PM
import React, { Component } from "react";
export default class Clock extends Component
 {
  constructor(props) {
    super(props);
    this.state = {
      time: "",
      show: true
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      const now = new Date();

      const timeString = now.toLocaleTimeString(this.props.locale, {
        timeZone: this.props.timezone,
        hour12: true
      });

      this.setState({ time: timeString });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  handleClose = () => {
    this.setState({ show: false });
  };

  render() {
    if (!this.state.show) return null;

    // Check AM / PM
    const isPM = this.state.time.includes("PM");

    const bgColor = isPM ? "#cb1310" : "#042b04"; // PM = red, AM = green

    return (
      <div style={{
        backgroundColor: bgColor,
        padding: "20px",
        margin: "10px",
        borderRadius: "10px",
        textAlign: "center"
      }}>
        <h2>{this.props.country}</h2>
        <h3>{this.state.time}</h3>

        <button onClick={this.handleClose}>Close</button>
      </div>
    );
  }
}


