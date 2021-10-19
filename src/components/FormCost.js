import React from 'react';
import fetchCurriences from '../fetch/RequestApi';
import '../pages/WalletPage.css';

class FormCost extends React.Component {
  constructor() {
    super();
    this.state = {
      typeOfCoins: [],
    };
    this.apiResults = this.apiResults.bind(this);
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
      <form>
        <label htmlFor="cost-value">
          Valor:
          <input type="number" id="cost-value" />
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
        <label htmlFor="description">
          Descrição:
          <input type="text" id="description" />
        </label>
      </form>
    );
  }
}

export default FormCost;
