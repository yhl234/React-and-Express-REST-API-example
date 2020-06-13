import React from 'react';
import PropTypes from 'prop-types';

const Order = ({ order, className }) => {
  const { _id, name, email, phone, time, numPeople } = order;
  return (
    <div className={className}>
      <div>{_id}</div>
      <div>{name}</div>
      <div>{email}</div>
      <div>{phone}</div>
      <div>{time}</div>
      <div>{numPeople}</div>
    </div>
  );
};
Order.propTypes = {
  order: PropTypes.object,
  className: PropTypes.string,
};

export default Order;
