import React from 'react';
import PropTypes from 'prop-types';
import OrderForm from '../UI/OrderForm';

const OrderEdit = ({ postId }) => (
  <OrderForm mode="edit" postId={postId}></OrderForm>
);
OrderEdit.propTypes = {
  postId: PropTypes.string,
};
export default OrderEdit;
