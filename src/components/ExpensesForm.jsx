import React, { Component } from 'react';
// import { connect } from 'react-redux';
import './css/expensesForm.css';

const API_URL = ('https://economia.awesomeapi.com.br/json/all');

class ExpensesForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      currencyArray: [],
      // value: '',
      // resume: '',
      // currency: 'USD',
      // payment: 'Dinheiro',
      // tag: 'Alimentação',
    };

    this.fetchCurrency = this.fetchCurrency.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.fetchCurrency();
  }

  handleChange({ target: { id, value } }) {
    this.setState({
      [id]: value,
    });
  }

  async fetchCurrency() {
    fetch(API_URL)
      .then((response) => response.json())
      .then((item) => this.setState({
        currencyArray: Object.keys(item).filter((code) => code !== 'USDT'),
        loading: false,
      }));
  }

  render() {
    const { currencyArray, loading } = this.state;
    if (!loading) {
      return (
        <form className="expensesForm">
          <label htmlFor="value">
            Valor:
            <input type="number" id="value" onChange={ this.handleChange } />
          </label>
          <label htmlFor="resume">
            Descrição:
            <input type="text" id="resume" onChange={ this.handleChange } />
          </label>
          <label htmlFor="currency">
            Moeda:
            <select id="currency" onChange={ this.handleChange }>
              {(currencyArray.map((curr, index) => (
                <option key={ index } value={ curr }>
                  {curr}
                </option>)))}
            </select>
          </label>
          <label htmlFor="payment">
            Método de pagamento:
            <select id="payment" onChange={ this.handleChange }>
              <option value="money">Dinheiro</option>
              <option value="credit">Cartão de Crédito</option>
              <option value="debit">Cartão de Débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag:
            <select id="tag" onChange={ this.handleChange }>
              <option value="alimentacao">Alimentação</option>
              <option value="lazer">Lazer</option>
              <option value="trabalho">Trabalho</option>
              <option value="transporte">Transporte</option>
              <option value="saude">Saúde</option>
            </select>
          </label>
        </form>
      );
    }
    return (
      <p> Loading... </p>
    );
  }
}

// const mapDispatchToProps = (state) => ({

// });

// export default connect(null, mapDispatchToProps)(ExpensesForm);
export default ExpensesForm;
