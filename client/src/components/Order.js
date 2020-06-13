import React from 'react';
import PropTypes from 'prop-types';
import { api } from '../config/globals';

const Order = ({ order, className }) => {
  const { _id, name, email, phone, time, numPeople } = order;

  const deleteHandler = () => {
    fetch(`${api}/orders/${_id}`, {
      method: 'DELETE',
    }).then(response => {
      response.json();
    });
  };
  const editHandler = () => {
    fetch(`${api}/orders/${_id}`, {
      method: 'DELETE',
    }).then(response => {
      response.json();
    });
  };
  return (
    <div className={className}>
      <div>{_id}</div>
      <div>{name}</div>
      <div>{email}</div>
      <div>{phone}</div>
      <div>{time}</div>
      <div>{numPeople}</div>
      <button type="button" onClick={editHandler}>
        Edit
      </button>
      <button type="button" onClick={deleteHandler}>
        Delete
      </button>
    </div>
  );
};
Order.propTypes = {
  order: PropTypes.object,
  className: PropTypes.string,
};

export default Order;
