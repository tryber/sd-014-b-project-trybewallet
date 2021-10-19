import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { preparingExpense } from '../actions';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      currencies: [],
      expense: {},
    };
  }

  componentDidMount() {
    fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((currencies) => this.filterCurrencies(currencies));
  }

  filterCurrencies(currencies) {
    let siglasCurrencies = Object.keys(currencies);
    siglasCurrencies = siglasCurrencies.filter((sig) => sig !== 'USDT');
    this.setState({ currencies: siglasCurrencies });
  }

  handleChange({ target }) {
    this.setState((state) => ({
      expense: {
        ...state.expense,
        [target.name]: target.value,
      },
    }));
  }

  submitExpense() {
    const { expensesLength, submitExpense } = this.props;
    const { expense } = this.state;
    const newExpense = { ...expense };
    newExpense.id = expensesLength;
    submitExpense(newExpense);
  }

  renderSelects() {
    const { currencies } = this.state;
    return (
      <>
        <label htmlFor="currency">
          Moeda
          <select
            id="currency"
            name="currency"
            onChange={ (e) => this.handleChange(e) }
          >
            {currencies.map((currency, i) => (
              <option key={ i } value={ currency }>
                { currency }
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="method">
          Método de pagamento
          <select id="method" name="method" onChange={ (e) => this.handleChange(e) }>
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select id="tag" name="tag" onChange={ (e) => this.handleChange(e) }>
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
      </>
    );
  }

  render() {
    return (
      <form>
        <label htmlFor="value">
          Valor
          <input
            type="text"
            id="value"
            name="value"
            onChange={ (e) => this.handleChange(e) }
          />
        </label>
        <label htmlFor="description">
          Descrição
          <input
            type="text"
            id="description"
            name="description"
            onChange={ (e) => this.handleChange(e) }
          />
        </label>
        { this.renderSelects() }
        <button type="button" onClick={ () => this.submitExpense() }>
          Adicionar despesa
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  expensesLength: PropTypes.number.isRequired,
  submitExpense: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  expensesLength: state.wallet.expenses.length,
});

const mapDispatchToProps = (dispatch) => ({
  submitExpense: (expense) => dispatch(preparingExpense(expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
