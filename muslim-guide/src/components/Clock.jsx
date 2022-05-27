/* eslint-disable jsx-quotes */
import React, { Component } from 'react';
import Button from './Button';

export default class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    setInterval(() => this.tick(), 1e3);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  handleOnClick(event) {
    console.log(event.target);
    console.log(this.tick());
  }

  tick() {
    this.setState({ date: new Date() });
  }

  render() {
    const { date } = this.state;
    return (
      <div>
        {date.toLocaleTimeString()}
        <Button handleClick={(e) => this.handleOnClick(e)} text='clickMs' />
      </div>
    );
  }
}
