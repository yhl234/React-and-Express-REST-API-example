import React from 'react';
import PropTypes from 'prop-types';
import { Container } from '@material-ui/core';
import HomeTabs from '../components/HomeTabs';
import Landing from '../components/Landing';
import Featured from '../components/Feartured';

const Home = ({ history }) => (
  <>
    <Landing>
      <HomeTabs />
    </Landing>
    <Container>
      <Featured />
    </Container>
  </>
);
Home.propTypes = {
  history: PropTypes.object,
};
export default Home;
