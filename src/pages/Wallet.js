import React from 'react';
import Header from '../components/Header';

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = {
      expense: 0,
      description: '',
      currency: '',
      method: '',
      category: '',
    };

    this.handlerInput = this.handlerInput.bind(this);
  }

  handlerInput({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { expense, description, currency, method, category } = this.state;
    const form = (
      <form>
        Valor
        <input
          value={ expense }
          onChange={ this.handlerInput }
          type="number"
          name="expense"
        />
        Descrição
        <input
          value={ description }
          onChange={ this.handlerInput }
          type="text"
          name="description"
        />
        Moeda
        <select value={ currency } onChange={ this.handlerInput } name="currency">
          <option value="BRL">BRL</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
        </select>
        Método de pagamento
        <select value={ method } onChange={ this.handlerInput } name="method">
          <option value="dinheiro">Dinheiro</option>
          <option value="cartao-credito">Cartão de crédito</option>
          <option value="cartao-debito">Cartão de débito</option>
        </select>
        Tag
        <select value={ category } onChange={ this.handlerInput } name="category">
          <option value="alimentacao">Alimentação</option>
          <option value="lazer">Lazer</option>
          <option value="trabalho">Trabalho</option>
          <option value="transporte">Transporte</option>
          <option value="saude">Saúde</option>
        </select>
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
