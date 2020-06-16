import React from 'react';
import { Container } from '@material-ui/core';
import HomeTabs from '../components/parts/HomeTabs';
import Landing from '../components/sections/Landing';
import Featured from '../components/sections/Featured';

const Home = () => (
  <>
    <Landing>
      <HomeTabs />
    </Landing>
    <Container>
      <Featured />
    </Container>
  </>
);

export default Home;
