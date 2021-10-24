import React, { Component } from 'react';
import fetchCurrency from '../services/fetchCurrency';

class Currency extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currencies: [],
    };
    this.currencySelect = this.currencySelect.bind(this);
  }

  componentDidMount() {
    this.currencySelect();
  }

  // utilizei o operador DELETE com a instrução do meu colega kauan carvalho
  // https://github.com/tryber/sd-014-b-project-trybewallet/pull/117
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete

  async currencySelect() {
    const awaitCurrency = await fetchCurrency();
    delete awaitCurrency.USDT;
    const currencyOption = Object.keys(awaitCurrency);
    this.setState({
      currencies: currencyOption,
    });
  }

  render() {
    const { currencies } = this.state;
    return (
      <label htmlFor="currency">
        Moeda:
        <select id="currency" name="currency">
          {currencies.map((currency) => (
            <option key={ currency }>{currency}</option>
          ))}
        </select>
      </label>
    );
  }
}

export default Currency;
