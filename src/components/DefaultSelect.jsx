import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DefaultSelect extends Component {
  render() {
    const { label, id, handleChange, value, options } = this.props;
    return (
      <label htmlFor={ id }>
        { label }
        :
        <select
          id={ id }
          value={ value }
          onChange={ handleChange }
        >
          { options.map((option, index) => (
            <option value={ option } key={ index }>
              { option }
            </option>
          ))}
        </select>
      </label>
    );
  }
}

DefaultSelect.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  handleChange: PropTypes.func,
  value: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string),
}.isRequired;

export default DefaultSelect;

/* options.map((option, index) => ({return
<option value={ option } key={ index }>{ option }</option>
}) */

/* return (
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
); */
