import React, { Component } from 'react';
import { api } from '../config/globals';
import Order from '../components/Order';

export default class backEnd extends Component {
  state = {
    orders: null,
  };

  componentDidMount() {
    fetch(`${api}/orders`)
      .then(res => res.json())
      .then(resData => {
        console.log(resData);
        this.setState({ orders: resData });
      });
  }

  render() {
    let displayOrders = null;
    // eslint-disable-next-line react/destructuring-assignment
    if (this.state.orders) {
      const { orders } = this.state;
      displayOrders = orders.map(order => {
        const { _id } = order;
        return <Order key={_id} order={order} />;
      });
    }

    return <div>{displayOrders}</div>;
  }
}
