import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { preparingExpense, submitCurrencies } from '../actions';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      expense: {
        currency: 'USD',
        description: '',
        method: 'Dinheiro',
        tag: 'Alimentação',
        value: '',
      },
    };
  }

  componentDidMount() {
    fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((currencies) => this.filterCurrencies(currencies));
  }

  filterCurrencies(currencies) {
    const { registerCurrencies } = this.props;
    let siglasCurrencies = Object.keys(currencies);
    siglasCurrencies = siglasCurrencies.filter((sig) => sig !== 'USDT');
    registerCurrencies(siglasCurrencies);
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
    this.setState({
      expense: {
        currency: 'USD',
        description: '',
        method: 'Dinheiro',
        tag: 'Alimentação',
        value: '',
      },
    })
  }

  renderSelects() {
    const { currencies } = this.props;
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
    const { expense: { value, description } } = this.state;
    return (
      <form className="form-expense">
        <label htmlFor="value">
          Valor
          <input
            type="text"
            id="value"
            name="value"
            value={ value }
            onChange={ (e) => this.handleChange(e) }
          />
        </label>
        <label htmlFor="description">
          Descrição
          <input
            type="text"
            id="description"
            name="description"
            value={ description }
            onChange={ (e) => this.handleChange(e) }
          />
        </label>
        { this.renderSelects() }
        <button
          type="button"
          className="add-expense"
          onClick={ () => this.submitExpense() }
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  expensesLength: PropTypes.number.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  submitExpense: PropTypes.func.isRequired,
  registerCurrencies: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  expensesLength: state.wallet.expenses.length,
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  submitExpense: (expense) => dispatch(preparingExpense(expense)),
  registerCurrencies: (currencies) => dispatch(submitCurrencies(currencies)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
