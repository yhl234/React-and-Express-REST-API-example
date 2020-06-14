import React from 'react';
import PropTypes from 'prop-types';
import OrderForm from '../UI/OrderForm';

const OrderEdit = ({ postId, onFinish }) => (
  <OrderForm mode="edit" postId={postId} onFinish={onFinish}></OrderForm>
);
OrderEdit.propTypes = {
  postId: PropTypes.string,
  onFinish: PropTypes.func,
};
export default OrderEdit;
