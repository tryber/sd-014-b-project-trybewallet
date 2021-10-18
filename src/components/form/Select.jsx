// Como deixa a primeira option do select já selecionada?
import React from 'react';
import PropTypes from 'prop-types';

export default function Select(props) {
  const { label, id, options, value, handleChange } = props;
  return (
    <label htmlFor={ id }>
      {label}
      :
      <select name={ id } id={ id } value={ value } onChange={ handleChange }>
        {options.map((option) => (
          <option key={ option } value={ option }>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

Select.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.String),
  handleChange: PropTypes.func,
}.isRequired;
