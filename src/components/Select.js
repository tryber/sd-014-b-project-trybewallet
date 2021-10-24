import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {
  render() {
    const { name, label, onHandleChange, options, value } = this.props;

    return (
      <label htmlFor={ name }>
        {label}
        <select
          name={ name }
          id={ name }
          onChange={ onHandleChange }
          value={ value }
        >
          {options.map((option, index) => (
            <option key={ index } value={ option }>
              {option}
            </option>
          ))}
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onHandleChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  value: PropTypes.string,
};

Select.defaultProps = {
  value: undefined,
};

export default Select;
