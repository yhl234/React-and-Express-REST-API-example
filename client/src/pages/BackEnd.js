/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { api } from '../config/globals';
import Order from '../components/Order';
import OrderCreate from '../components/OrderCreate';

export default class backEnd extends Component {
  state = {
    orders: null,
    editing: false,
  };

  componentDidMount() {
    fetch(`${api}/orders`)
      .then(res => res.json())
      .then(resData => {
        console.log(resData);
        this.setState({ orders: resData });
      });
  }

  createHandler = () => {
    this.setState(prevState => ({
      editing: !prevState.editing,
    }));
  };

  render() {
    let displayOrders = null;
    if (this.state.orders) {
      const { orders } = this.state;
      displayOrders = orders.map(order => {
        const { _id } = order;
        return <Order key={_id} order={order} />;
      });
    }
    let createFrom = null;
    if (this.state.editing) {
      createFrom = <OrderCreate />;
    }
    return (
      <div>
        <button type="button" onClick={this.createHandler}>
          Create
        </button>
        {displayOrders}
        {createFrom}
      </div>
    );
  }
}
