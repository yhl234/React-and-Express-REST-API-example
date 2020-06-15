import React from 'react';
import PropTypes from 'prop-types';
import { Container } from '@material-ui/core';
import HomeTabs from '../components/HomeTabs';

const Home = ({ history }) => (
  <div>
    <Container>
      <HomeTabs />
    </Container>
  </div>
);
Home.propTypes = {
  history: PropTypes.object,
};
export default Home;
