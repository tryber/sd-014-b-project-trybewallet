import React, { Component } from 'react';
import currencyAPI from '../services/currencyAPI';

class Forms extends Component {
  constructor(props) {
    super(props);

    this.state = {
      coins: [],
    };

    this.updateState = this.updateState.bind(this);
  }

  async componentDidMount() {
    const response = await currencyAPI();
    const arrayOfCoins = [];
    Object.keys(response).map((coin) => {
      if (coin !== 'USDT') {
        arrayOfCoins.push(coin);
      }
      return arrayOfCoins;
    });
    console.log(arrayOfCoins);
    this.updateState(arrayOfCoins);
  }

  updateState(arrayOfCoins) {
    this.setState({
      coins: arrayOfCoins,
    });
  }

  render() {
    const { coins } = this.state;
    return (
      <form>
        <label htmlFor="value">
          Valor:
          <input id="value" type="text" name="value" />
        </label>
        <label htmlFor="description">
          Descrição:
          <input id="description" type="text" name="description" />
        </label>
        <label htmlFor="currency">
          Moeda:
          <select id="currency" name="currency">
            { coins.map((coin, index) => <option key={ index }>{ coin }</option>) }
          </select>
        </label>
        <label htmlFor="payment-method">
          Método de pagamento:
          <select id="payment-method" name="payment-method">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag:
          <select id="tag" name="tag">
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

export default Forms;
