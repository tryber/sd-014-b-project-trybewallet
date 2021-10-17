import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {
  render() {
    const { name, labelText, value, arrayOption, htmlFor, id } = this.props;
    return (
      <label htmlFor={ htmlFor }>
        { labelText }
        <select
          name={ name }
          id={ id }
        >
          { arrayOption.map((item, index) => (
            <option
              key={ index }
              value={ value }
            >
              { item }
            </option>
          ))}
        </select>

      </label>
    );
  }
}

Select.propTypes = {
  arrayOption: PropTypes.arrayOf(PropTypes.string).isRequired,
  name: PropTypes.string.isRequired,
  htmlFor: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Select;
