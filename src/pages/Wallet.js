import React from 'react';
import getCurrency from '../service';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      currency: '',
      isLoading: true,
    };
  }

  async componentDidMount() {
    await this.setCurrencyInState();
  }

  async setCurrencyInState() {
    const currency = await getCurrency();
    this.setState((state) => ({
      ...state,
      currency,
      isLoading: false,
    }));
  }

  render() {
    const { currency, isLoading } = this.state;
    const arrCurrency = Object.keys(currency);
    return isLoading ? <p>Loading...</p>
      : (
        <div>
          <h1>My Currencys</h1>
          <form>
            <label htmlFor="currencys">
              Moedas
              <select id="currencys">
                {arrCurrency.map((c) => c !== 'USDT' && <option key={ c }>{c}</option>)}
              </select>
            </label>
          </form>

        </div>
      );
  }
}

export default Wallet;
