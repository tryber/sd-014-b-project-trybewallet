import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { walletAction } from '../actions';
import './css/expensesForm.css';

const API_URL = ('https://economia.awesomeapi.com.br/json/all');

class ExpensesForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      currencyArray: [],
      expense: {
        id: 0,
        value: '',
        description: '',
        currency: '',
        method: '',
        tag: '',
        exchangeRates: {},
      },
      total: 0,
    };

    this.fetchCurrency = this.fetchCurrency.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.addExpense = this.addExpense.bind(this);
    this.htmlFormOne = this.htmlFormOne.bind(this);
    this.htmlFormTwo = this.htmlFormTwo.bind(this);
    this.fetchExchangeRates = this.fetchExchangeRates.bind(this);
    this.totalHeader = this.totalHeader.bind(this);
  }

  componentDidMount() {
    this.fetchCurrency();
  }

  handleChange({ target: { id, value } }) {
    // const { expense } = this.state;
    this.setState((prevState) => ({
      expense: {
        ...prevState.expense,
        [id]: value,
      },
    }));
  }

  fetchCurrency() {
    fetch(API_URL)
      .then((response) => response.json())
      .then((item) => this.setState({
        currencyArray: Object.keys(item).filter((code) => code !== 'USDT'),
        loading: false,
      }));
  }

  async fetchExchangeRates() {
    const response = await fetch(API_URL);
    const json = await response.json();
    this.setState((prevState) => ({
      expense: {
        ...prevState.expense,
        exchangeRates: json,
      },
    }));
  }

  totalHeader() {
    const { expense: { value, currency, exchangeRates } } = this.state;
    // Multiplica o valor da despesa * cotação da moeda referente a despesa
    const brlTotal = value * (parseFloat(exchangeRates[currency].ask));
    this.setState((prevState) => ({
      ...prevState,
      total: prevState.total + brlTotal,
    }));
  }

  addExpense() {
    const { dispatchExpense } = this.props;
    dispatchExpense(this.state);
    this.setState((prev) => ({ // limpa o form após o dispatch
      expense: {
        id: prev.expense.id + 1,
        value: '',
        description: '',
        currency: '',
        method: '',
        tag: '',
        exchangeRates: {},
      },
    }));
  }

  htmlFormOne() {
    const { currencyArray, expense:
      { value, description } } = this.state;
    return (
      <div>
        <label htmlFor="value">
          Valor:
          <input
            type="number"
            id="value"
            value={ value }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="description">
          Descrição:
          <input
            type="text"
            id="description"
            value={ description }
            onChange={ this.handleChange }
          />
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
      </div>
    );
  }

  htmlFormTwo() {
    return (
      <div>
        <label htmlFor="method">
          Método de pagamento:
          <select id="method" onChange={ this.handleChange }>
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag:
          <select id="tag" onChange={ this.handleChange }>
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        <button
          type="button"
          id="add-btn"
          onClick={ async () => {
            await this.fetchExchangeRates();
            this.totalHeader();
            this.addExpense();
          } }
        >
          Adicionar Despesa
        </button>
      </div>
    );
  }

  render() {
    const { loading } = this.state;
    if (!loading) {
      return (
        <form className="expensesForm">
          {this.htmlFormOne()}
          {this.htmlFormTwo()}
        </form>
      );
    }
    return (
      <p> Loading... </p>
    );
  }
}

ExpensesForm.propTypes = {
  dispatchExpense: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  dispatchExpense: (state) => dispatch(walletAction(state)),
});

export default connect(null, mapDispatchToProps)(ExpensesForm);
