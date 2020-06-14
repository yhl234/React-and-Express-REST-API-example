/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { Backdrop, Modal, Grid, Button } from '@material-ui/core';

import { api } from '../config/globals';
import Order from '../components/Order';
import OrderCreate from '../components/OrderCreate';
import OrderEdit from '../components/OrderEdit';
import OrderForm from '../UI/OrderForm';

export default class backEnd extends Component {
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

  editHandler = postId => {
    this.setState(prevState => ({
      edit: !prevState.edit,
      open: !prevState.open,
      editing: postId,
    }));
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false, edit: false, creating: false, editing: null });
  };

  render() {
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
        <section>
          <Grid container direction="row" justify="center" alignItems="center">
            {displayOrders}
          </Grid>
        </section>
        <Modal
          open={open}
          onClose={this.handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          {inputFrom}
        </Modal>
      </div>
    );
  }
}
