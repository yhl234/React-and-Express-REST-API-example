/* eslint-disable react/destructuring-assignment */
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Button, Grid } from '@material-ui/core';
import { api } from '../config/globals';
import Order from '../components/Order';

export default class OrderSearch extends Component {
  // static propTypes = {
  // prop: PropTypes,
  // };

  state = {
    phone: '',
    orders: null,
    notFound: null,
    notFoundText: null,
    submitted: false,
  };

  handleChange = event => {
    const { target } = event;
    this.setState({ [target.name]: target.value });
    this.setState({ notFound: null, notFoundText: null });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { phone } = this.state;
    fetch(`${api}/orders/search/${phone}`)
      .then(res => res.json())
      .then(resData => {
        if (resData.length < 1) {
          this.setState({ notFound: true, notFoundText: 'Booking not found' });
        }
        this.setState({ orders: resData });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    const { phone, submitted, notFound, notFoundText } = this.state;
    let displayOrders = null;
    if (this.state.orders) {
      const { orders } = this.state;
      displayOrders = orders.map(order => {
        const { _id } = order;
        return (
          <Order
            key={_id}
            order={order}
            edit={this.editHandler}
            loadPosts={this.loadPosts}
          />
        );
      });
    }
    return (
      <>
        <ValidatorForm onSubmit={this.handleSubmit}>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="baseline"
          >
            <TextValidator
              label="Phone Number"
              margin="normal"
              value={phone}
              onChange={this.handleChange}
              type="text"
              name="phone"
              id="phone"
              validators={['required']}
              errorMessages={['Phone is required', 'Phone is not valid']}
              helperText={notFoundText || null}
              error={notFound || null}
            />
            <Button
              size="small"
              color="primary"
              variant="contained"
              type="submit"
              disabled={submitted}
            >
              {(submitted && 'Your form is submitted!') ||
                (!submitted && 'Search')}
            </Button>
          </Grid>
        </ValidatorForm>
        <section>
          <Grid container direction="row" justify="center" alignItems="center">
            {displayOrders}
          </Grid>
        </section>{' '}
      </>
    );
  }
}
