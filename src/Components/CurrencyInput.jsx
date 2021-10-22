import React, { Component } from 'react';

class CurrencyInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currencies: [],
    };
  }

  render() {
    const { currencies } = this.state;
    return (
      <label htmlFor="currency">
        Moeda:
        <select name="currency">
          oi
          {currencies.map((currency) => (
            <option key={ currency.code }>{ currency.code }</option>
          ))}
        </select>
      </label>
    );
  }
}

export default CurrencyInput;
