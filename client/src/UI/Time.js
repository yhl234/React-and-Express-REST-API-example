import React from 'react';
import PropTypes from 'prop-types';

const Time = ({ time }) => {
  const timestamp = Date.parse(time);
  const localTime = new Date(timestamp).toLocaleString();
  return <span>{localTime}</span>;
};
Time.propTypes = {
  time: PropTypes.string,
};

export default Time;
