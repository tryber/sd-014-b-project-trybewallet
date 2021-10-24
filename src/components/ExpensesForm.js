import React, { Component } from 'react';
import fetchQuotes from '../services';

class ExpensesForm extends Component {
  constructor() {
    super();

    this.state = {
      quotes: [],
    };

    this.requestQuotes = this.requestQuotes.bind(this);
  }

  componentDidMount() {
    this.requestQuotes();
  }

  async requestQuotes() {
    const quotes = await fetchQuotes();
    delete quotes.USDT;
    this.setState({
      quotes,
    });
  }

  render() {
    const { quotes } = this.state;

    return (
      <form>
        <label htmlFor="value">
          Valor
          <input
            type="number"
            id="value"
          />
        </label>
        <label htmlFor="description">
          Descrição
          <input
            type="text"
            id="description"
          />
        </label>
        <label htmlFor="coin">
          Moeda
          <select id="coin">
            {
              Object.keys(quotes).map((quote) => <option key={ quote }>{quote}</option>)
            }
          </select>
        </label>
        <label htmlFor="payment-method">
          Método de pagamento
          <select id="payment-method">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="category">
          Tag
          <select id="category">
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
