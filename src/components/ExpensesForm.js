import React, { Component } from 'react';

class ExpensesForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      arrayOfCoins: [],
    };
  }

  componentDidMount() {
    this.currencyApi();
  }

  async currencyApi() {
    const getApi = await fetch('https://economia.awesomeapi.com.br/json/all');
    const response = await getApi.json();
    const coins = Object.keys(response).filter((coin) => coin !== 'USDT');
    this.setState({
      arrayOfCoins: coins,
    });
  }

  render() {
    const { arrayOfCoins } = this.state;
    return (
      <form>
        <label htmlFor="value">
          Valor:
          <input type="text" id="value" />
        </label>
        <label htmlFor="description">
          Descrição:
          <input type="text" id="description" />
        </label>
        <label htmlFor="currency">
          Moeda:
          <select id="currency">
            { arrayOfCoins.map(
              (coin) => (<option key={ coin }>{coin}</option>),
            ) }
          </select>
        </label>
        <label htmlFor="payment">
          Método de pagamento:
          <select id="payment">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag:
          <select id="tag">
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

export default ExpensesForm;
