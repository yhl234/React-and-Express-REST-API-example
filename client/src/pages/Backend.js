/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { Dialog, Grid, Button } from '@material-ui/core';
import { api } from '../config/globals';
import OrdersTable from '../components/OrdersTable';
import Order from '../components/Order';

import OrderForm from '../UI/OrderForm';

export default class Backend extends Component {
  state = {
    orders: null,
    edit: false,
    creating: false,
    editing: null,
    open: false,
  };

  componentDidMount() {
    this.loadPosts();
  }

  loadPosts = () => {
    fetch(`${api}/orders`)
      .then(res => res.json())
      .then(resData => {
        this.setState({ orders: resData });
      });
  };

  createHandler = () => {
    this.setState(prevState => ({
      creating: !prevState.creating,
      open: !prevState.open,
    }));
  };

  editHandler = _id => {
    this.setState(prevState => ({
      edit: !prevState.edit,
      open: !prevState.open,
      editing: _id,
    }));
  };

  deleteHandler = _id => {
    console.log(_id);
    fetch(`${api}/orders/delete/${_id}`, {
      method: 'DELETE',
    }).then(response => {
      response.json();
      this.loadPosts();
    });
  };

  // open Dialog to show input from
  handleOpen = () => {
    this.setState({ open: true });
  };

  // close the Dialog and reset edit and creation
  handleClose = () => {
    this.setState({ open: false, edit: false, creating: false, editing: null });
  };

  render() {
    let displayTable = null;
    if (this.state.orders) {
      const { orders } = this.state;
      displayTable = (
        <OrdersTable
          data={orders}
          onDelete={this.deleteHandler}
          onEdit={this.editHandler}
        />
      );
    }
    let inputFrom = null;
    if (this.state.creating) {
      inputFrom = (
        <OrderForm onFinish={this.handleClose} loadPosts={this.loadPosts} />
      );
    }
    if (this.state.edit) {
      inputFrom = (
        <OrderForm
          mode="edit"
          postId={this.state.editing}
          onFinish={this.handleClose}
          loadPosts={this.loadPosts}
        />
      );
    }
    const { open } = this.state;
    return (
      <div>
        <Button color="primary" size="small" onClick={this.createHandler}>
          Create
        </Button>
        <section>{displayTable}</section>
        <Dialog open={open} onClose={this.handleClose}>
          {inputFrom}
        </Dialog>
      </div>
    );
  }
}
