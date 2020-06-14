import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { api } from '../config/globals';

const Order = ({ order, className, edit, loadPosts }) => {
  const { _id, name, email, phone, time, numOfPeople } = order;

  const deleteHandler = () => {
    fetch(`${api}/orders/delete/${_id}`, {
      method: 'DELETE',
    }).then(response => {
      response.json();
      loadPosts();
    });
  };

  return (
    <Card className={className} variant="outlined">
      <CardContent>
        <h3>
          {name} <span>{numOfPeople}</span>
        </h3>
        <div>Email: {email}</div>
        <div>Phone: {phone}</div>
        <div>Appointment Time: {time}</div>
        <CardActions>
          <Button
            variant="outlined"
            color="primary"
            size="small"
            onClick={() => edit(_id)}
          >
            Edit
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            size="small"
            onClick={deleteHandler}
          >
            Delete
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};
Order.propTypes = {
  order: PropTypes.object,
  className: PropTypes.string,
  edit: PropTypes.func,
  loadPosts: PropTypes.func,
};

export default styled(Order)`
  text-align: left;
  border: 1px solid gray;
  max-width: 300px;
  padding: 1.5rem;
  margin: 0.5rem;
`;
