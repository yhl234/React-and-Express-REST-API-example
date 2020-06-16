import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Card, CardContent } from '@material-ui/core/';
import { Mail, Phone, CalendarToday } from '@material-ui/icons/';
import Time from '../../UI/Time';

const Order = ({ order, className }) => {
  const { name, email, phone, time, numOfPeople } = order;

  // Prepare guests string
  let numOfPString = '';
  if (numOfPeople === 2) {
    numOfPString = ` and another person`;
  }
  if (numOfPeople > 2) {
    numOfPString = ` and ${numOfPeople - 1} more people`;
  }

  return (
    <Card className={className} variant="outlined">
      <CardContent>
        <h3>{name} </h3>
        <span className="guests">{numOfPString}</span>
        <div className="info">
          <Mail />: {email}
        </div>
        <div className="info">
          <Phone />: {phone}
        </div>
        <div className="info">
          <CalendarToday />: <Time time={time} />
        </div>
      </CardContent>
    </Card>
  );
};
Order.propTypes = {
  order: PropTypes.object,
  className: PropTypes.string,
};

export default styled(Order)`
  text-align: left;
  margin-top: 0.5rem;
  width: 100%;

  @media only screen and (max-width: 760px) {
    width: 100%;
  }
  h3 {
    display: inline-block;
    margin-bottom: 10px;
  }
  .guests {
    font-size: 10px;
  }
  .info {
    display: flex;
    align-items: center;
    margin: 10px 0;
  }
`;
