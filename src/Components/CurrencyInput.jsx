import React, { Component } from 'react';
import getCurrencies from '../services/currencyApi';

class CurrencyInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currencies: [],
    };
    this.getCurrenciesFromServices = this.getCurrenciesFromServices.bind(this);
  }

  componentDidMount() {
    this.getCurrenciesFromServices();
  }
  // Consultei https://github.com/tryber/sd-014-b-project-trybewallet/pull/21/files e tive ajuda do proprio.

  async getCurrenciesFromServices() {
    const dataApi = await getCurrencies();
    this.setState({
      currencies: Object.keys(dataApi),
    });
  }

  render() {
    const { currencies } = this.state;
    return (
      <label htmlFor="currency">
        Moeda
        <select id="currency" name="currency-input">
          {currencies.map((currency) => {
            if (currency !== 'USDT') {
              return (
                <option key={ currency }>{ currency }</option>
              );
            }
            return '';
          })}
        </select>
      </label>
    );
  }
}

export default CurrencyInput;
