import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const modal = ({
  className,
  title,
  children,
  onCancelModal,
  onAcceptModal,
  acceptEnabled,
  isLoading,
}) =>
  ReactDOM.createPortal(
    <div className={className}>
      <header className="header">
        <h1>{title}</h1>
      </header>
      <div className="content">{children}</div>
      <div className="actions">
        <button type="button" onClick={onCancelModal}>
          Cancel
        </button>
        <button
          type="button"
          onClick={onAcceptModal}
          disabled={!acceptEnabled}
          loading={isLoading}
        >
          Accept
        </button>
      </div>
    </div>,
    document.getElementById('modal-root')
  );

export default styled(modal)`
  position: fixed;
  width: 90%;
  left: 5%;
  top: 20vh;
  background: white;
  border-radius: 5px;
  z-index: 200;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  @media (min-width: 768px) {
    width: 40rem;
    left: calc((100% - 40rem) / 2);
  }

  .header {
    border-bottom: 2px solid #3b0062;
  }

  .header h1 {
    font-size: 1.5rem;
    color: #3b0062;
    margin: 1rem;
  }

  .content {
    padding: 1rem;
  }

  .actions {
    padding: 1rem;
    text-align: right;
  }

  .actions button {
    margin: 0 0.5rem;
  }
`;
