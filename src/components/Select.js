import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {
  render() {
    const { name, handleChange, value, arrayMap, description } = this.props;
    return (
      <label htmlFor={ name }>
        { description }
        <select
          id={ name }
          name={ name }
          value={ value }
          onChange={ handleChange }
        >
          {arrayMap.map((coinsCurrency) => (
            <option key={ coinsCurrency.ask } value={ coinsCurrency.code }>
              {coinsCurrency.code}
            </option>
          ))}
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  handleChange: PropTypes.func,
  arrayMap: PropTypes.array,
}.isRequered;

export default Select;
