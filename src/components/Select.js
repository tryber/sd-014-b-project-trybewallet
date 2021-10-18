import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {
  render() {
    const { name, labelText, arrayOption, htmlFor, id, onChange } = this.props;
    return (
      <label htmlFor={ htmlFor }>
        { labelText }
        <select
          name={ name }
          id={ id }
          onChange={ onChange }
        >
          { arrayOption.map((item, index) => (
            <option
              key={ index }
              value={ item }
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
  onChange: PropTypes.func.isRequired,
};

export default Select;
