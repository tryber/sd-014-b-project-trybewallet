import React from 'react';
import Header from '../components/Header';
import fetchAPI from '../services/API';

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = { currency: [] };

    this.pushOptions = this.pushOptions.bind(this);
  }

  async componentDidMount() {
    const resolve = await fetchAPI();
    const coinsOption = [];
    Object.keys(resolve).map((option) => {
      if (option !== 'USDT') {
        coinsOption.push(option);
      }
      return coinsOption;
    });
    this.pushOptions(coinsOption);
  }

  pushOptions(coinsOption) {
    this.setState({
      currency: coinsOption,
    });
  }

  render() {
    const { currency } = this.state;
    const form = (
      <form>
        <label htmlFor="value">
          Valor
          <input type="number" name="value" id="value" />
        </label>
        <label htmlFor="description">
          Descrição
          <input type="text" name="description" id="description" />
        </label>
        <label htmlFor="currency">
          Moeda
          <select name="currency" id="currency">
            { currency.map((option, index) => <option key={ index }>{ option }</option>) }
          </select>
        </label>
        <label htmlFor="method">
          Método de pagamento
          <select name="method" id="method">
            <option value="dinheiro">Dinheiro</option>
            <option value="cartao-credito">Cartão de crédito</option>
            <option value="cartao-debito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select name="tag" id="tag">
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
      </form>
    );

    return (
      <>
        <Header />
        { form }
      </>
    );
  }
}

export default Wallet;
