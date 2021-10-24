import PropTypes from 'prop-types';
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
  // Porem apaguei funcoes redundantes.

  async getCurrenciesFromServices() {
    const dataApi = await getCurrencies();
    this.setState({
      currencies: Object.keys(dataApi),
    });
  }

  render() {
    const { currencies } = this.state;
    const { handleChange, currency } = this.props;
    return (
      <label htmlFor="currency-input">
        Moeda
        <select
          id="currency-input"
          name="currency"
          onChange={ (event) => handleChange(event) }
          value={ currency }
        >
          {currencies.map((coin) => {
            if (coin !== 'USDT') {
              return (
                <option key={ coin }>{ coin }</option>
              );
            }
            return '';
          })}
        </select>
      </label>
    );
  }
}

CurrencyInput.propTypes = {
  currency: PropTypes.any,
  handleChange: PropTypes.func,
}.isRequired;

export default CurrencyInput;
