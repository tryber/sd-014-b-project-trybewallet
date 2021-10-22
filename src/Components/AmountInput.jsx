import React, { Component } from 'react';

class AmountInput extends Component {
  render() {
    return (
      <label htmlFor="amount">
        Valor:
        <input type="number" name="amount" />
      </label>
    );
  }
}

export default AmountInput;
