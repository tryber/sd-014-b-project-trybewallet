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
        value: '',
        description: '',
        currency: '',
        method: '',
        tag: '',
      },
    };

    this.fetchCurrency = this.fetchCurrency.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.addExpense = this.addExpense.bind(this);
  }

  componentDidMount() {
    this.fetchCurrency();
  }

  handleChange({ target: { id, value } }) {
    const { expense } = this.state;
    this.setState({
      expense: {
        ...expense,
        [id]: value,
      },
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

  addExpense() {
    const { dispatchExpense } = this.props;
    const { expense } = this.state;
    console.log(this.state);
    dispatchExpense(expense);
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
          <label htmlFor="description">
            Descrição:
            <input type="text" id="description" onChange={ this.handleChange } />
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
          <label htmlFor="method">
            Método de pagamento:
            <select id="method" onChange={ this.handleChange }>
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
          <button type="button" id="add-btn" onClick={ this.addExpense }>
            Adicionar Despesa
          </button>
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
// export default ExpensesForm;
