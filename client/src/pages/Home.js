import React from 'react';
import PropTypes from 'prop-types';
import OrderForm from '../UI/OrderForm';
import OrderSearch from '../UI/OrderSearch';

const Home = ({ history }) => {
  const onFinish = () => history.push('/thanks');
  return (
    <div>
      <OrderForm onFinish={onFinish} />
      <OrderSearch />
    </div>
  );
};
Home.propTypes = {
  history: PropTypes.object,
};
export default Home;
