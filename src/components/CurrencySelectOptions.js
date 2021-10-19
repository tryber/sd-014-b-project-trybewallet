import React from 'react';
import { getCurrencies } from '../services/CurrencyAPI';

class CurrencySelectOptions extends React.Component {
  constructor() {
    super();

    this.state = {
      stateCurrencies: [],
    };

    this.mapCurrenciesToState = this.mapCurrenciesToState.bind(this);
  }

  componentDidMount() {
    this.mapCurrenciesToState();
  }

  async mapCurrenciesToState() {
    const currencies = await getCurrencies();

    this.setState({
      stateCurrencies: currencies,
    });
  }

  render() {
    const { stateCurrencies } = this.state;
    return (
      <>
        { stateCurrencies.map((currency) => (
          <option key={ currency } value={ currency }>{ currency }</option>
        )) }
      </>
    );
  }
}

export default CurrencySelectOptions;
