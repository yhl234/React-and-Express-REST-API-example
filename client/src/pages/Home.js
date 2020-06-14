import React from 'react';
import PropTypes from 'prop-types';
import { Container } from '@material-ui/core';
import OrderForm from '../UI/OrderForm';
import OrderSearch from '../UI/OrderSearch';

const Home = ({ history }) => {
  const onFinish = () => history.push('/thanks');
  return (
    <div>
      <Container maxWidth="xs">
        <OrderForm onFinish={onFinish} />
      </Container>
      <OrderSearch />
    </div>
  );
};
Home.propTypes = {
  history: PropTypes.object,
};
export default Home;
