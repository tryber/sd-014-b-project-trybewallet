import React from 'react';
import PropTypes from 'prop-types';

export default function Input(props) {
  const { label, type, id, value, handleChange } = props;
  return (
    <label htmlFor={ id }>
      {label}
      :
      <input
        type={ type }
        name={ id }
        id={ id }
        placeholder={ label }
        value={ value }
        onChange={ handleChange }
      />
    </label>
  );
}

Input.propTypes = {
  state: PropTypes.shape({
    label: PropTypes.string,
    id: PropTypes.string,
  }),
  handleChange: PropTypes.func,
}.isRequired;

Input.defaultProps = {
  type: 'text',
};
