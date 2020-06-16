/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
  Dialog,
  DialogContent,
  Button,
  CircularProgress,
} from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { api } from '../config/globals';
import OrdersTable from '../components/parts/OrdersTable';

import OrderForm from '../components/parts/OrderForm';

class Backend extends Component {
  state = {
    orders: null,
    edit: false,
    creating: false,
    editing: null,
    open: false,
  };

  static propTypes = {
    className: PropTypes.string,
  };

  componentDidMount() {
    this.loadPosts();
  }

  // Get all order from DB
  loadPosts = () => {
    fetch(`${api}/orders`)
      .then(res => res.json())
      .then(resData => {
        this.setState({ orders: resData });
      });
  };

  // Open Dialog when + button press
  createHandler = () => {
    this.setState(prevState => ({
      creating: !prevState.creating,
      open: !prevState.open,
    }));
  };

  // Open Dialog when edit button press
  editHandler = _id => {
    this.setState(prevState => ({
      edit: !prevState.edit,
      open: !prevState.open,
      editing: _id,
    }));
  };

  // Receives _id from table and delete it
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

  // formatting time before pass to table
  formateTime = data => {
    data.forEach(d => {
      const timestamp = Date.parse(d.time);
      const localTime = new Date(timestamp).toLocaleString();
      d.time = localTime;
    });
    return data;
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
    const { className } = this.props;

    return (
      <section className={className}>
        {orders ? (
          <>
            <Button color="primary" size="small" onClick={this.createHandler}>
              <AddCircleIcon />
            </Button>
            <OrdersTable
              data={this.formateTime(orders)}
              onDelete={this.deleteHandler}
              onEdit={this.editHandler}
            />
          </>
        ) : (
          <CircularProgress />
        )}
        <Dialog open={open} onClose={this.handleClose} maxWidth="sm">
          <DialogContent>{inputFrom}</DialogContent>
        </Dialog>
      </section>
    );
  }
}
export default styled(Backend)`
  padding: 50px;
  @media only screen and (max-width: 760px) {
    padding: 20px;
    .MTableToolbar-searchField-14 {
      display: none;
    }
  }
`;
