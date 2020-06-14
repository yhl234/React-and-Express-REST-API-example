import 'date-fns';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import {
  Card,
  Grid,
  CardActions,
  CardContent,
  Button,
} from '@material-ui/core';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { api } from '../config/globals';

export default class OrderForm extends Component {
  static propTypes = {
    className: PropTypes.string,
    postId: PropTypes.string,
    mode: PropTypes.string,
    onFinish: PropTypes.func,
    loadPosts: PropTypes.func,
  };

  state = {
    name: '',
    phone: '',
    email: '',
    time: new Date(),
    numOfPeople: '',
    submitted: false,
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
    const { onFinish, loadPosts } = this.props;
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
      .then(data => {
        this.setState({ submitted: true }, () => {
          setTimeout(() => {
            this.setState({ submitted: false });
            onFinish();
          }, 500);
        });
        loadPosts();
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleUpdate = event => {
    event.preventDefault();
    const { postId, onFinish, loadPosts } = this.props;
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
      .then(data => {
        this.setState({ submitted: true }, () => {
          setTimeout(() => {
            this.setState({ submitted: false });
            onFinish();
          }, 500);
        });
        loadPosts();
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    const { className, mode } = this.props;
    const { name, phone, email, time, numOfPeople, submitted } = this.state;

    return (
      <Card className={className} variant="outlined">
        <CardContent>
          <ValidatorForm
            onSubmit={mode === 'edit' ? this.handleUpdate : this.handleSubmit}
          >
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
            >
              <div>
                <TextValidator
                  label="Name"
                  margin="normal"
                  value={name}
                  onChange={this.handleChange}
                  type="text"
                  name="name"
                  id="name"
                  validators={['required']}
                  errorMessages={['Name is required']}
                />
              </div>
              <div>
                <TextValidator
                  label="Phone Number"
                  value={phone}
                  onChange={this.handleChange}
                  type="text"
                  name="phone"
                  id="phone"
                  validators={['required']}
                  errorMessages={['Phone is required', 'Phone is not valid']}
                />
              </div>
              <div>
                <TextValidator
                  label="Email"
                  value={email}
                  onChange={this.handleChange}
                  type="email"
                  placeholder="Your Email"
                  name="email"
                  id="email"
                  validators={['required', 'isEmail']}
                  errorMessages={['Email is required', 'Email is not valid']}
                />
              </div>
              <div>
                <TextValidator
                  label="Number Of People"
                  value={numOfPeople}
                  onChange={this.handleChange}
                  type="number"
                  min="1"
                  placeholder="Your Name"
                  name="numOfPeople"
                  id="numOfPeople"
                  validators={['required', 'minNumber:0', 'maxNumber:255']}
                  errorMessages={[
                    'This field is required',
                    'Number should greater then 0',
                    'Number should smaller then 255',
                  ]}
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

              <CardActions>
                <Button
                  color="primary"
                  variant="contained"
                  type="submit"
                  disabled={submitted}
                >
                  {(submitted && 'Your form is submitted!') ||
                    (!submitted && 'Submit')}
                </Button>
              </CardActions>
            </Grid>
          </ValidatorForm>
        </CardContent>
      </Card>
    );
  }
}
