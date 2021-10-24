import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchApi, setWalletExpenses, addExpenseButton } from '../actions/index';

class ExpenseForm extends Component {
  constructor() {
    super();
    this.state = {
      valor: 0,
      descricao: '',
      moeda: 'USD',
      metodo: 'Dinheiro',
      tag: 'Alimentação',
      expenses: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleWithExpenses = this.handleWithExpenses.bind(this);
  }

  async handleWithExpenses() {
    const { valor, descricao, moeda, metodo, tag } = this.state;
    const { dispachToState, dispachToGlobalState } = this.props;
    const response = await fetch('https://economia.awesomeapi.com.br/json/all')
      .then((result) => result.json());
    const expensesWallet = {
      valor,
      descricao,
      moeda,
      metodo,
      tag,
      exchangeRates: response,
    };
    dispachToState(this.state);
    dispachToGlobalState(expensesWallet);
  }

  handleChange({ target }) {
    this.setState({
      [target.id]: target.value,
    });
  }

  render() {
    const { currency } = this.props;
    return (
      <form>
        <label htmlFor="valor">
          Valor
          <input type="text" id="valor" onChange={ this.handleChange } />
        </label>
        <label htmlFor="descricao">
          Descrição
          <input type="text" id="descricao" onChange={ this.handleChange } />
        </label>
        <label htmlFor="moeda">
          Moeda
          <select id="moeda" onChange={ this.handleChange }>
            {currency.map((coin) => (
              <option key={ coin } value={ coin }>
                { coin }
              </option>))}
          </select>
        </label>
        <label htmlFor="metodo">
          Método de Pagamento
          <select id="metodo" onChange={ this.handleChange }>
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
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
          onClick={ this.handleWithExpenses }
        >
          Adicionar Despesas
        </button>
      </form>

    );
  }
}

const mapStateToProps = (state) => ({
  currency: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

const mapDispatchToprops = (dispatch) => ({
  expenses: () => dispatch(fetchApi()),
  dispachToState: (state) => dispatch(setWalletExpenses(state)),
  dispachToGlobalState: (expenses) => dispatch(addExpenseButton(expenses)),
});

ExpenseForm.propTypes = {
  currency: PropTypes.arrayOf(PropTypes.string).isRequired,
  dispachToState: PropTypes.func.isRequired,
  dispachToGlobalState: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToprops)(ExpenseForm);
