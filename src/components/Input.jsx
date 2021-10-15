import PropTypes from 'prop-types';
import React from 'react';

export default function Input({ inputValue, onChange, label, id }) {
  return (
    <label htmlFor={ id }>
      {label}
      <input
        type="text"
        id={ id }
        value={ inputValue }
        onChange={ onChange }
      />
    </label>
  );
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  inputValue: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
