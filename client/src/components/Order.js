import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Card, CardContent } from '@material-ui/core/';
import { Mail, Phone, CalendarToday } from '@material-ui/icons/';
import Time from '../UI/Time';

const Order = ({ order, className }) => {
  const { _id, name, email, phone, time, numOfPeople } = order;

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
        <span>{numOfPString}</span>
        <div>
          <Mail />: {email}
        </div>
        <div>
          <Phone />: {phone}
        </div>
        <div>
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
  border: 1px solid gray;
  max-width: 300px;
  padding: 1.5rem;
  margin: 0.5rem;
  h3 {
    display: inline-block;
  }
`;
