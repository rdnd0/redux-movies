import React, { Component } from "react";
import "../CountDown.css";
export default class CountDown extends Component {
  state = {
    deadline: "December 25, 2019",
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  };

  componentWillMount() {
    this.getTimeLeft(this.state.deadline);
  }

  componentDidMount() {
    setInterval(() => {
      this.getTimeLeft(this.state.deadline);
    }, 1000);
  }

  add0 = num => (num < 10 ? "0" + num : num);

  getTimeLeft = deadline => {
    const time = Date.parse(deadline) - Date.parse(new Date());
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / 1000 / 60) % 60);
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    this.setState({
      days,
      hours,
      minutes,
      seconds
    });
  };

  render() {
    const { days, hours, minutes, seconds, deadline } = this.state;
    return (
      <div>
        <h3>CountDown</h3>
        <div className="time">{this.add0(days)} days</div>
        <div className="time">{this.add0(hours)} hours</div>
        <div className="time">{this.add0(minutes)} minutes</div>
        <div className="time">{this.add0(seconds)} seconds</div>
      </div>
    );
  }
}
