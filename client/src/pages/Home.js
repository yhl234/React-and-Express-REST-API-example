import React from 'react';
import PropTypes from 'prop-types';
import OrderForm from '../UI/OrderForm';

const Home = ({ history }) => {
  const onFinish = () => history.push('/thanks');
  return (
    <div>
      <OrderForm onFinish={onFinish} />
    </div>
  );
};
Home.propTypes = {
  history: PropTypes.object,
};
export default Home;
