import React from 'react';

class ExpensesForm extends React.Component {
  constructor() {
    super();

    this.state = {
      currencySymbols: [],
    };

    this.fetchCurrency = this.fetchCurrency.bind(this);
  }

  componentDidMount() {
    this.fetchCurrency();
  }

  async fetchCurrency() {
    const currencyRequest = await fetch('https://economia.awesomeapi.com.br/json/all');

    if (currencyRequest.ok) {
      const currencyJson = await currencyRequest.json();

      const filteredCurrency = Object.keys(currencyJson)
        .filter((currency) => currency !== 'USDT');

      this.setState({ currencySymbols: filteredCurrency });
    }
  }

  render() {
    const { currencySymbols } = this.state;

    const payment = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const tags = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

    return (
      <form>
        <label htmlFor="valueInput">
          Valor:
          <input type="text" name="valueInput" id="valueInput" />
        </label>

        <label htmlFor="descriptionInput">
          Descrição:
          <input type="text" name="descriptionInput" id="descriptionInput" />
        </label>

        <label htmlFor="currencySelect">
          Moeda:
          <select name="currencySelect" id="currencySelect">
            { currencySymbols.map((symbol) => (
              <option key={ symbol } value={ symbol }>{symbol}</option>
            )) }
          </select>
        </label>

        <label htmlFor="paymentSelect">
          Método de pagamento:
          <select name="paymentSelect" id="paymentSelect">
            { payment.map((payOption) => (
              <option key={ payOption } value={ payOption }>{payOption}</option>
            )) }
          </select>
        </label>

        <label htmlFor="tagSelect">
          Tag:
          <select name="tagSelect" id="tagSelect">
            { tags.map((tag) => (
              <option key={ tag } value={ tag }>{tag}</option>
            )) }
          </select>
        </label>
      </form>
    );
  }
}

export default ExpensesForm;
