import React, { Component } from 'react';

class AmountInput extends Component {
  render() {
    return (
      <label htmlFor="amount">
        Valor
        <input type="number" id="amount" name="amount-input" />
      </label>
    );
  }
}

export default AmountInput;
