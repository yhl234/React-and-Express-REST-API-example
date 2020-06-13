import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DateTimePicker from 'react-datetime-picker';
import { api } from '../config/globals';

export default class OrderCreate extends Component {
  static propTypes = {
    className: PropTypes.string,
  };

  state = {
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    numOfPeople: '',
  };

  handleChange = event => {
    const { target } = event;
    this.setState({ [target.name]: target.value });
  };

  handleTimeChange = date => {
    this.setState({ date });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    const { name, phone, email, date, numOfPeople } = this.state;
    const timeString = date.toISOString();
    fetch(`${api}/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        phone,
        email,
        date: timeString,
        numOfPeople,
      }),
    })
      .then(res => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error('Creating or editing a post failed!');
        }
        res.json();
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    const { className } = this.props;
    const { name, phone, email, date, time, numOfPeople } = this.state;
    return (
      <div className={className}>
        <form>
          <div>
            <label htmlFor="name">
              Name
              <input
                value={name}
                onChange={this.handleChange}
                type="text"
                placeholder="Your Name"
                name="name"
                id="name"
              />
            </label>
          </div>
          <div>
            <label htmlFor="phone">
              Phone Number
              <input
                value={phone}
                onChange={this.handleChange}
                type="text"
                placeholder="Your Phone Number"
                name="phone"
                id="phone"
              />
            </label>
          </div>
          <div>
            <label htmlFor="email">
              Email
              <input
                value={email}
                onChange={this.handleChange}
                type="email"
                placeholder="Your Email"
                name="email"
                id="email"
              />
            </label>
          </div>
          {/* <div>
            <label htmlFor="date">
              Booking Date
              <input
                value={date}
                onChange={this.handleChange}
                type="date"
                placeholder=""
                name="date"
                id="date"
              />
            </label>
          </div> */}
          <div>
            <label htmlFor="time">
              Booking Time
              <input
                value={time}
                onChange={this.handleChange}
                type="time"
                placeholder=""
                name="time"
                id="time"
              />
            </label>
          </div>
          <DateTimePicker
            name="date"
            onChange={this.handleTimeChange}
            value={date}
          />
          <div>
            <label htmlFor="numOfPeople">
              Number Of People
              <input
                value={numOfPeople}
                onChange={this.handleChange}
                type="number"
                min="1"
                placeholder="Your Name"
                name="numOfPeople"
                id="numOfPeople"
              />
            </label>
          </div>
          <button type="submit" onClick={this.handleSubmit}>
            submit
          </button>
        </form>
      </div>
    );
  }
}
