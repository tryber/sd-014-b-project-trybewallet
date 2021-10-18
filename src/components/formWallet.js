import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchAPI, actionButton } from '../actions';

class FormWallet extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      expensesLocal: [],
      // exchangeRatesLocal: {},
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    this.setState({
      [target.id]: target.value,
    });
  }
  // const { dispatchExpenses, expenses } = this.props;
  // const { value, description, currency, method, tag } = this.state;
  // const requestExchangeRates = await fetch('https://economia.awesomeapi.com.br/json/all');
  // const resolveExchangeRates = await requestExchangeRates.json();
  // DICA DO LUIS GUSTAVO PARA MELHORAR O HANDLECLICK

  async handleClick() {
    const { dispatchExpenses, expenses } = this.props;
    const { value, description, currency, method, tag } = this.state;
    const localExchangeRates = await fetch('https://economia.awesomeapi.com.br/json/all')
      .then((res) => res.json());
    const newExpense = [{
      id: expenses.length,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates: localExchangeRates,
    }];
    this.setState({
      expensesLocal: [...newExpense],
    });
    dispatchExpenses(this.state);
  }

  render() {
    const { currencies } = this.props;
    return (
      <form>
        <label htmlFor="value">
          Valor
          <input type="number" id="value" onChange={ this.handleChange } />
        </label>
        <label htmlFor="description">
          Descrição
          <input type="text" id="description" onChange={ this.handleChange } />
        </label>
        <label htmlFor="currency">
          Moeda
          <select id="currency" onChange={ this.handleChange }>
            {currencies.map((moeda) => (
              <option
                key={ moeda }
                value={ moeda }
              >
                { moeda }
              </option>)) }
          </select>
        </label>
        <label htmlFor="method">
          Método de pagamento
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
        <button type="button" onClick={ this.handleClick }>Adicionar despesa</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  getMoeda: () => dispatch(fetchAPI()),
  dispatchExpenses: (state) => dispatch(actionButton(state)),
});

FormWallet.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  dispatchExpenses: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FormWallet);
