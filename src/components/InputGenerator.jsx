import React from 'react';
import PropTypes from 'prop-types';

function InputGenerator(props) {
  const { name, handleChange, text, value } = props;
  return (
    <label
      className="form-label"
      htmlFor={ name }
    >
      { text }
      <input
        type="text"
        name={ name }
        id={ name }
        className="form-control"
        onChange={ handleChange }
        value={ value }
      />
    </label>
  );
}

InputGenerator.propTypes = {
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default InputGenerator;
