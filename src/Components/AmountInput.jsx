import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AmountInput extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="amount-input">
        Valor
        <input
          type="number"
          id="amount-input"
          name="value"
          value={ value }
          onChange={ (event) => handleChange(event) }
        />
      </label>
    );
  }
}

AmountInput.propTypes = {
  value: PropTypes.number,
  handleChange: PropTypes.func,
}.isRequired;

export default AmountInput;
