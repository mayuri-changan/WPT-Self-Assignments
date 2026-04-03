// 15. Implement and integrate a new feature in the React Clock app where one can select a
// country time zone from dropdown list and click on “Add” button to render it.
import React, { Component } from "react";
class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: ""
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      const now = new Date();

      const timeString = now.toLocaleTimeString(this.props.locale, {
        timeZone: this.props.timezone,
        hour12: false
      });

      this.setState({ time: timeString });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div style={{
        border: "1px solid black",
        padding: "15px",
        margin: "10px",
        borderRadius: "10px",
        textAlign: "center"
      }}>
        <h3>{this.props.country}</h3>
        <h2>{this.state.time}</h2>
      </div>
    );
  }
}

export default Clock;
