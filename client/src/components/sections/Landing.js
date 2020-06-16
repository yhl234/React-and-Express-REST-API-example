import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Background from '../../images/background.jpg';

const Landing = ({ className, children }) => (
  <div className={className} style={{ backgroundImage: `url(${Background})` }}>
    <div className="text">
      <h2>People don't take trips, trips take people. </h2>
    </div>
    <div className="form">{children}</div>
  </div>
);

Landing.propTypes = {
  className: PropTypes.string,
  children: PropTypes.object,
};

export default styled(Landing)`
  padding: 50px;
  background-color: #80808059;
  background-size: cover;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 760px) {
    flex-direction: column;
    justify-content: center;
  }
  .text {
    display: flex;
    align-items: center;
    flex: 1 0;
  }
  h2 {
    background: #80808059;
    text-align: left;
    font-size: 30px;
    line-height: 50px;
    color: white;
  }
  .form {
    flex: 1 0;
    max-width: 300px;
    @media only screen and (max-width: 760px) {
      max-width: 100%;
    }
    max-height: 500px;
    overflow-y: scroll;
    .MuiCard-root {
      box-sizing: border-box;
    }
  }
`;
