import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {
  render() {
    const { id, labelText, name, value, handleChange, options } = this.props;
    return (
      <div className="col">
        <label
          className="form-label"
          htmlFor={ id }
        >
          { labelText }
        </label>
        <select
          className="formSelect"
          id={ id }
          name={ name }
          required
          value={ value }
          onChange={ handleChange }
        >
          {
            options.map((option, index) => (
              <option key={ index }>{ option }</option>
            ))
          }
        </select>
      </div>
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
};

export default Select;
