import PropTypes from 'prop-types';
import React from 'react';

function Input({ id, type, value, onChange, textLabel, dataTestId, className }) {
  return (
    <label htmlFor={ id }>
      { textLabel }
      <input
        type={ type }
        value={ value }
        onChange={ onChange }
        name={ id }
        id={ id }
        className={ className }
        data-testid={ dataTestId }
      />
    </label>
  );
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  textLabel: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  dataTestId: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default Input;
