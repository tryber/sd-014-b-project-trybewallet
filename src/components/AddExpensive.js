import React, { Component } from 'react';
import fetchCoinsApi from '../services/fetchCoinsApi';

class AddExpensive extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currency: [],
    };

    this.updateState = this.updateState.bind(this);
  }

  async componentDidMount() {
    const response = await fetchCoinsApi();
    const arrayOfCurrency = [];
    Object.keys(response).map((currency) => {
      if (currency !== 'USDT') {
        arrayOfCurrency.push(currency);
      }
      return arrayOfCurrency;
    });
    // console.log(arrayOfCurrency);
    this.updateState(arrayOfCurrency);
  }

  updateState(arrayOfCurrency) {
    this.setState({
      currency: arrayOfCurrency,
    });
  }

  render() {
    const { currency } = this.state;
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
            { currency.map((coin, index) => <option key={ index }>{ coin }</option>) }
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
export default AddExpensive;
