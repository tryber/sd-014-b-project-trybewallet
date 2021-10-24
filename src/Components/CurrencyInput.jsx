import React, { Component } from 'react';
import getCurrencies from '../services/currencyApi';

class CurrencyInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiCurrencies: [],
      currencies: [],
    };
    this.getCurrenciesFromServices = this.getCurrenciesFromServices.bind(this);
    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    this.getCurrenciesFromServices();
  }
  // Consultei https://github.com/tryber/sd-014-b-project-trybewallet/pull/21/files e tive ajuda do proprio.

  async getCurrenciesFromServices() {
    const dataApi = await getCurrencies();
    this.setState({
      apiCurrencies: [dataApi],
    });
    this.getData();
  }

  getData() {
    const { apiCurrencies } = this.state;
    apiCurrencies.map((currencyKeys) => (
      this.setState({
        currencies: Object.keys(currencyKeys),
      })
    ));
  }

  render() {
    const { currencies } = this.state;
    return (
      <label htmlFor="currency">
        Moeda
        <select id="currency" name="currency-input">
          {currencies.map((currencie) => {
            if (currencie !== 'USDT') {
              return (
                <option key={ currencie }>{ currencie }</option>
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
