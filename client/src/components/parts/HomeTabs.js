import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { FormControlLabel, RadioGroup, Radio, Card } from '@material-ui/core/';
import OrderForm from './OrderForm';
import OrderSearch from './OrderSearch';

const HomeTabs = ({ className }) => {
  const [value, setValue] = useState('form');

  const handleChange = event => {
    setValue(event.target.value);
  };
  // display success message and switch to search teb
  const onFinish = () => {
    alert(
      'You have successfully submitted your order and we will send you a confirmation to your Email'
    );
    setValue('search');
  };
  return (
    <Card className={className} variant="outlined">
      <RadioGroup
        aria-label="mode"
        name="mode"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel
          value="form"
          control={<Radio size="small" />}
          label="Order"
        />
        <FormControlLabel
          value="search"
          control={<Radio size="small" />}
          label="Search"
        />
      </RadioGroup>
      {value === 'form' ? (
        <OrderForm fullWidth onFinish={onFinish} />
      ) : (
        <OrderSearch />
      )}
    </Card>
  );
};
HomeTabs.propTypes = {
  className: PropTypes.string,
};
export default styled(HomeTabs)`
  padding: 20px;
  min-height: 500px;
  .MuiFormGroup-root {
    flex-direction: row;
    justify-content: space-around;
  }
  .MuiButton-root {
    width: 100%;
    margin-top: 20px;
  }
`;
