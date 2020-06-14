import 'date-fns';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { api } from '../config/globals';

export default class OrderForm extends Component {
  static propTypes = {
    className: PropTypes.string,
    postId: PropTypes.string,
    mode: PropTypes.string,
  };

  state = {
    name: '',
    phone: '',
    email: '',
    time: '',
    numOfPeople: '',
  };

  componentDidMount() {
    const { mode } = this.props;
    if (mode === 'edit') {
      const { postId } = this.props;
      fetch(`${api}/orders/${postId}`)
        .then(res => {
          if (res.status !== 200 && res.status !== 201) {
            throw new Error('Get post failed!');
          }
          return res.json();
        })
        .then(resData => {
          console.log(resData);

          const { name, phone, email, time, numOfPeople } = resData;
          this.setState({
            name,
            phone,
            email,
            time,
            numOfPeople,
          });
        })
        .catch(err => {
          console.log(err);
        });
    }
  }

  handleChange = event => {
    const { target } = event;
    this.setState({ [target.name]: target.value });
  };

  handleTimeChange = time => {
    this.setState({ time });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, phone, email, time, numOfPeople } = this.state;
    fetch(`${api}/orders/add/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        phone,
        email,
        time,
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

  handleUpdate = event => {
    event.preventDefault();
    const { postId } = this.props;
    const { name, phone, email, time, numOfPeople } = this.state;
    fetch(`${api}/orders/update/${postId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        phone,
        email,
        time,
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
    const { className, mode } = this.props;
    const { name, phone, email, time, numOfPeople } = this.state;
    let submitBtn = (
      <Button
        type="submit"
        onClick={this.handleSubmit}
        variant="contained"
        color="primary"
      >
        submit
      </Button>
    );
    if (mode === 'edit') {
      submitBtn = (
        <Button
          type="submit"
          onClick={this.handleUpdate}
          variant="contained"
          color="primary"
        >
          Update
        </Button>
      );
    }

    return (
      <Card className={className} variant="outlined">
        <CardContent>
          <form>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
            >
              <div>
                <TextField
                  label="Name"
                  value={name}
                  onChange={this.handleChange}
                  type="text"
                  name="name"
                  id="name"
                />
              </div>
              <div>
                <TextField
                  label="Phone Number"
                  value={phone}
                  onChange={this.handleChange}
                  type="text"
                  name="phone"
                  id="phone"
                />
              </div>
              <div>
                <TextField
                  label="Email"
                  value={email}
                  onChange={this.handleChange}
                  type="email"
                  placeholder="Your Email"
                  name="email"
                  id="email"
                />
              </div>
              <div>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                  >
                    <KeyboardDatePicker
                      margin="normal"
                      name="time"
                      id="date-picker-dialog"
                      label="Date picker dialog"
                      format="MM/dd/yyyy"
                      value={time}
                      onChange={this.handleTimeChange}
                      KeyboardButtonProps={{
                        'aria-label': 'change date',
                      }}
                    />
                    <KeyboardTimePicker
                      margin="normal"
                      name="time"
                      id="time-picker"
                      label="Time picker"
                      value={time}
                      onChange={this.handleTimeChange}
                      KeyboardButtonProps={{
                        'aria-label': 'change time',
                      }}
                    />
                  </Grid>
                </MuiPickersUtilsProvider>
              </div>
              <div>
                <TextField
                  label="Number Of People"
                  value={numOfPeople}
                  onChange={this.handleChange}
                  type="number"
                  min="1"
                  placeholder="Your Name"
                  name="numOfPeople"
                  id="numOfPeople"
                />
              </div>
            </Grid>
          </form>
          <CardActions> {submitBtn}</CardActions>
        </CardContent>
      </Card>
    );
  }
}
