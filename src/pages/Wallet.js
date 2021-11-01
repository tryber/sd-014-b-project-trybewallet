import React from 'react';
import Header from '../components/Header';

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = {
      allCurrencies: [],
    };

    this.fetchCurrencies = this.fetchCurrencies.bind(this);
  }

  componentDidMount() {
    this.fetchCurrencies();
  }

  async fetchCurrencies() {
    const data = await fetch('https://economia.awesomeapi.com.br/json/all');
    const result = await data.json();
    const currencies = Object.keys(result).filter((currency) => currency !== 'USDT');
    this.setState({
      allCurrencies: currencies,
    });
  } // Referência do método para remover o USDT do array: https://github.com/tryber/sd-014-b-project-trybewallet/pull/47/files

  render() {
    const { allCurrencies } = this.state;
    return (
      <div>
        <Header />
        <form>
          <label htmlFor="value">
            Valor
            <input type="text" id="value" />
          </label>
          <label htmlFor="description">
            Descrição
            <input type="text" id="description" />
          </label>
          <label htmlFor="currency">
            Moeda
            <select id="currency">
              { allCurrencies.map(
                (currency) => (<option key={ currency }>{currency}</option>),
              ) }
            </select>
          </label>
          <label htmlFor="payment">
            Método de pagamento
            <select id="payment">
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag
            <select id="tag">
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

export default Wallet;
