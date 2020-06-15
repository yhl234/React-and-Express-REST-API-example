/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import {
  Dialog,
  DialogContent,
  Button,
  CircularProgress,
} from '@material-ui/core';
import { api } from '../config/globals';
import OrdersTable from '../components/OrdersTable';

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
    })
      .then(response => {
        response.json();
      })
      .then(() => {
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
    let inputFrom = null;
    if (this.state.creating) {
      inputFrom = (
        <OrderForm
          onFinish={this.handleClose}
          loadPosts={this.loadPosts}
          fullWidth
        />
      );
    }
    if (this.state.edit) {
      inputFrom = (
        <OrderForm
          mode="edit"
          fullWidth
          postId={this.state.editing}
          onFinish={this.handleClose}
          loadPosts={this.loadPosts}
        />
      );
    }
    const { open, orders } = this.state;
    return (
      <div>
        <Button color="primary" size="small" onClick={this.createHandler}>
          Create
        </Button>
        <section>
          {orders ? (
            <OrdersTable
              data={orders}
              onDelete={this.deleteHandler}
              onEdit={this.editHandler}
            />
          ) : (
            <CircularProgress />
          )}
        </section>
        <Dialog open={open} onClose={this.handleClose} maxWidth="sm">
          <DialogContent>{inputFrom}</DialogContent>
        </Dialog>
      </div>
    );
  }
}
