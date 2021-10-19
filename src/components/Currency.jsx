import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Currency extends Component {
  render() {
    const { value, handleChange, currencies } = this.props;
    return (
      <label htmlFor="currency">
        Moeda:
        <select
          name="currency"
          id="currency"
          value={ value }
          onChange={ (event) => handleChange(event) }
        >
          {currencies.map((currency, index) => (
            <option key={ index } value={ currency[0] }>{currency[0]}</option>
          ))}
        </select>
      </label>
    );
  }
}

Currency.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(
    PropTypes.array,
  ).isRequired,
};

export default Currency;
