import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {
  render() {
    const { id, labelText, name, value, handleChange, defaultValue,
      defaultOption, options } = this.props;
    return (
      <label htmlFor={ id }>
        { labelText }
        <select
          id={ id }
          name={ name }
          required
          value={ value }
          onChange={ handleChange }
        >
          <option value={ defaultValue }>{ defaultOption }</option>
          {
            options.map((option, index) => (
              <option key={ index }>{ option }</option>
            ))
          }
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  id: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
  defaultValue: PropTypes.string.isRequired,
  defaultOption: PropTypes.string.isRequired,
};

export default Select;
