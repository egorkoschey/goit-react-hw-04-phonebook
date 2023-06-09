import React from 'react';
import PropTypes from 'prop-types';
import { Input } from './Filter.styled';

const Filter = ({ value, onChange }) => (
  <label>
    <Input type="text" value={value} onChange={onChange} />
  </label>
);

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Filter;