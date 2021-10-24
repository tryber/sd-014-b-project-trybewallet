import React from 'react';
import fetchCurriences from '../services/requestsApi';

class ExpensesForm extends React.Component {
  constructor() {
    super();
    this.state = {
      currencies: [],
    };
    this.handleCurrenciesState = this.handleCurrenciesState.bind(this);
  }

  componentDidMount() {
    this.handleCurrenciesState();
  }

  async handleCurrenciesState() {
    const currencies = await fetchCurriences();
    this.setState({
      currencies: currencies.filter((currence) => currence !== 'USDT'),
    });
  }

  render() {
    const { currencies } = this.state;
    return (
      <form>
        <label htmlFor="value">
          Valor:
          <input type="number" id="value" />
        </label>
        <label htmlFor="description">
          Descrição:
          <input type="text" id="description" />
        </label>
        <label htmlFor="currency">
          Moeda:
          <select id="currency">
            {currencies.map((currencie, index) => (
              <option key={ index }>
                {currencie}
              </option>))}
          </select>
        </label>
        <label htmlFor="paymentMethod">
          Método de pagamento:
          <select id="paymentMethod">
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
