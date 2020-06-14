import React from 'react';
import PropTypes from 'prop-types';
import OrderForm from '../UI/OrderForm';

const OrderCreate = ({ onFinish }) => (
  <OrderForm onFinish={onFinish}></OrderForm>
);
OrderCreate.propTypes = {
  onFinish: PropTypes.func,
};

export default OrderCreate;
