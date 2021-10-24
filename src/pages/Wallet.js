import React from 'react';
import getCurrencies from '../service';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      currencies: '',
      isLoading: true,
    };
  }

  async componentDidMount() {
    await this.setCurrencyInState();
  }

  async setCurrencyInState() {
    const currencies = await getCurrencies();
    this.setState((state) => ({
      ...state,
      currencies,
      isLoading: false,
    }));
  }

  render() {
    const { currencies, isLoading } = this.state;
    const arrCurrencies = Object.keys(currencies);
    return isLoading ? <p>Loading...</p>
      : (
        <div>
          <h1>My Currenciess</h1>
          <form>
            <label htmlFor="currencys">
              Moedas
              <select id="currencys">
                {arrCurrencies.map((c) => c !== 'USDT' && <option key={ c }>{c}</option>)}
              </select>
            </label>
          </form>

        </div>
      );
  }
}

export default Wallet;
