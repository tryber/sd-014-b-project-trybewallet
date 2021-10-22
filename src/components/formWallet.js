import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchDataCoins, expenseWallet, addButton } from '../actions';

class FormWallet extends Component {
  constructor() {
    super();
    this.state = {
      valor: 0,
      descricao: '',
      moeda: 'USD',
      metodo: 'Dinheiro',
      tag: 'Alimentação',
      totalExpenses: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  async handleClick() {
    const { valor, descricao, moeda, metodo, tag } = this.state;
    const { expenseToState, addExpenseToGlobalState } = this.props;
    const response = await fetch('https://economia.awesomeapi.com.br/json/all')
      .then((data) => data.json());
    const addExpense = {
      valor,
      descricao,
      moeda,
      metodo,
      tag,
      exchangeRates: response,
    };
    expenseToState(this.state);
    addExpenseToGlobalState(addExpense);
  }

  handleChange({ target }) {
    this.setState({
      [target.id]: target.value,
    });
  }

  render() {
    const { coins } = this.props;
    if (!coins) return <span>Loading</span>;
    return (
      <div>
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
            {coins.map((currency) => (
              <option key={ currency } value={ currency }>
                { currency }
              </option>))}
          </select>
        </label>
        <label htmlFor="metodo">
          Método de pagamento
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
        <button type="button" onClick={ this.handleClick }>Adicionar despesa</button>
      </div>
    );
  }
}

FormWallet.propTypes = {
  coins: PropTypes.arrayOf(PropTypes.string).isRequired,
  expenseToState: PropTypes.func.isRequired,
  addExpenseToGlobalState: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  coins: state.wallet.coins,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  expenses: () => dispatch(fetchDataCoins()),
  expenseToState: (state) => dispatch(expenseWallet(state)),
  addExpenseToGlobalState: (expense) => dispatch(addButton(expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormWallet);
