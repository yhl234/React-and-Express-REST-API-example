import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { FormControlLabel, RadioGroup, Radio, Card } from '@material-ui/core/';
import OrderForm from '../UI/OrderForm';
import OrderSearch from '../UI/OrderSearch';

const HomeTabs = ({ className }) => {
  const [value, setValue] = useState('form');

  const handleChange = event => {
    setValue(event.target.value);
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
          label="New order"
        />
        <FormControlLabel
          value="search"
          control={<Radio size="small" />}
          label="Search orders"
        />
      </RadioGroup>
      {value === 'form' ? <OrderForm fullWidth /> : <OrderSearch />}
    </Card>
  );
};
HomeTabs.propTypes = {
  className: PropTypes.string,
};
export default styled(HomeTabs)`
  padding: 20px;
  min-height: 450px;
  .MuiFormGroup-root {
    flex-direction: row;
  }
`;
