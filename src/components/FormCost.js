import React from 'react';
import fetchCurriences from '../fetch/RequestApi';
import '../pages/WalletPage.css';

class FormCost extends React.Component {
  constructor() {
    super();
    this.state = {
      typeOfCoins: [],
      description: '',
      coin: '',
      payment: '',
      tag: '',
      value: '',
    };
    this.apiResults = this.apiResults.bind(this);
    this.addNewExpense = this.addNewExpense.bind(this);
  }

  componentDidMount() {
    this.apiResults();
  }

  async apiResults() {
    const results = await fetchCurriences();
    this.setState({
      typeOfCoins: results.filter((item) => item !== 'USDT'),
    });
  }

  render() {
    const { typeOfCoins } = this.state;
    return (
      <form className="form-wallet-page">
        <label htmlFor="cost-value">
          Valor:
          <input className="input-wallet" type="number" id="cost-value" />
        </label>
        <label htmlFor="currency">
          Moeda:
          <select id="currency">
            {typeOfCoins.map((coin, index) => (
              <option key={ index }>
                {coin}
              </option>))}
          </select>
        </label>
        <label htmlFor="payment">
          Método de pagamento:
          <select id="payment">
            <option value="Dinheiro">Dinheiro</option>
            <option value="Crédito">Cartão de crédito</option>
            <option value="Débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag:
          <select id="tag">
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        <label htmlFor="description">
          Descrição:
          <input className="input-wallet" type="text" id="description" />
        </label>
        <button
          className="btn-add-expense"
          type="button"
          onChange={ this.addNewExpense }
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

export default FormCost;
