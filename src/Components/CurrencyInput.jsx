import React, { Component } from 'react';

class CurrencyInput extends Component {
  render() {
    return (
      <label htmlFor="currency">
        Moeda:
        <select name="currency">
          BRL
        </select>
      </label>
    );
  }
}

export default CurrencyInput;
