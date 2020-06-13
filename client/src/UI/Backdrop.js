/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const backdrop = ({ className, onClick, open }) => {
  const handleKeyPress = e => {
    if (e.key === 'esc') {
      console.log('enter press here! ');
    }
  };
  ReactDOM.createPortal(
    <div
      className={[{ className }, 'backdrop', open ? 'open' : ''].join(' ')}
      onClick={onClick}
      onKeyPress={handleKeyPress}
    />,
    document.getElementById('backdrop-root')
  );
};

export default styled(backdrop)`
  .backdrop {
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.75);
    z-index: 100;
    position: fixed;
    left: 0;
    top: 0;
    transition: opacity 0.3s ease-out;
    opacity: 1;
  }
`;
