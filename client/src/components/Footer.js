/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import MailIcon from '@material-ui/icons/Mail';
import CodeIcon from '@material-ui/icons/Code';
import IconButton from '@material-ui/core/IconButton';

import LinkedInIcon from '@material-ui/icons/LinkedIn';

const Footer = ({ className }) => (
  <footer className={className}>
    <h3>See You Soon</h3>
    <div>
      <a
        href="https://github.com/yhl234"
        title="yhl234"
        target="_blank"
        rel="noreferrer"
      >
        <IconButton className="icons">
          <CodeIcon fontSize="large" />
        </IconButton>
      </a>
      <a
        href="https://www.linkedin.com/in/louis-lee-a85159129"
        title="Louis Lee"
        target="_blank"
        rel="noreferrer"
      >
        <IconButton className="icons">
          <LinkedInIcon fontSize="large" className="icons" />
        </IconButton>
      </a>

      <a
        href="mailto:leejepn@gmail.com"
        title="leejepn@gmail.com"
        target="_blank"
        rel="noreferrer"
      >
        <IconButton className="icons">
          <MailIcon fontSize="large" />
        </IconButton>
      </a>
    </div>
    <div className="credit">
      <small>
        © {new Date().getFullYear()},{' '}
        <a href="https://yhl234.netlify.app/" target="_blank" rel="noreferrer">
          Louis Lee
        </a>{' '}
        All Rights Reserved. Built with{' '}
        <a href="https://www.gatsbyjs.org" target="_blank" rel="noreferrer">
          React
        </a>{' '}
        and{' '}
        <a href="https://material-ui.com/" target="_blank" rel="noreferrer">
          MATERIAL UI
        </a>
      </small>
    </div>
  </footer>
);

Footer.propTypes = {
  className: PropTypes.string,
};

export default styled(Footer)`
  background-color: #006db3;
  padding: 2rem;
  color: #fff;
  h3 {
    margin: 0 0 1.25rem 0;
  }
  a {
    color: #fff;
  }
  a:hover,
  a:focus {
    color: #999;
  }
  .icons {
    color: #fff;
  }
  .credit {
    border-top: 1px solid white;
    padding-top: 0.5rem;
  }
`;
