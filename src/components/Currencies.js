import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class Currencies extends Component {
  render() {
    const { value, handleChange, id, label, name, options } = this.props;
    return (
      <label htmlFor={ id }>
        { label }
        <select id={ id } onChange={ handleChange } name={ name } value={ value }>
          {options.map((currency, i) => (
            <option key={ i } value={ currency }>
              {currency}
            </option>
          ))}
        </select>
      </label>
    );
  }
}

Currencies.propTypes = {
  options: PropTypes.shape({
    map: PropTypes.func,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
