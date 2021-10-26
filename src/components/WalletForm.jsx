import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { expenseAPI, fullExpenseAPI } from '../services/ExpenseAPI';
import { setExpense } from '../actions/index';

class WalletForm extends React.Component {
  constructor() {
    super();

    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      currencies: [],
      exchangeRates: [],
      total: 0,
    };

    this.getcurrencies = this.getcurrencies.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.addTotal = this.addTotal.bind(this);
    this.getFullCurrencies = this.getFullCurrencies.bind(this);
  }

  componentDidMount() {
    this.getcurrencies();
    this.getFullCurrencies();
  }

  onSubmit() {
    const { dispatchExpense, valor } = this.props;
    const { id, total } = this.state;
    this.setState({
      id: id + 1,
      total: total + valor,
    });
    dispatchExpense(this.state);
  }

  async getcurrencies() {
    const result = await expenseAPI();
    console.log(result);
    this.setState({
      currencies: result.filter((currency) => currency !== 'USDT'),
    });
  }

  async getFullCurrencies() {
    const resultado = await fullExpenseAPI();
    console.log(resultado);
    this.setState({
      exchangeRates: resultado,
    });
  }

  addTotal() {
    const { valor } = this.props;
    const { total } = this.state;
    this.setState({
      total: total + valor,
    });
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  renderForm() {
    const { description, value, currency, currencies } = this.state;
    return (
      <div>
        <label
          htmlFor="value"
        >
          Valor
          <input
            name="value"
            id="value"
            value={ value }
            onChange={ this.handleChange }
            type="number"
          />
        </label>
        <label
          htmlFor="description"
        >
          Descrição
          <input
            name="description"
            id="description"
            value={ description }
            onChange={ this.handleChange }
            type="text"
          />
        </label>
        <label htmlFor="currency">
          Moeda
          <select
            id="currency"
            value={ currency }
            name="currency"
            onChange={ this.handleChange }
          >
            {currencies.map((coin, index) => (
              <option key={ index }>{coin}</option>
            ))}
          </select>
        </label>
      </div>
    );
  }

  renderForm2() {
    const { method, tag } = this.state;
    return (
      <div>
        <label htmlFor="method">
          Método de Pagamento
          <select
            id="method"
            value={ method }
            name="method"
            onChange={ this.handleChange }
          >
            Método de Pagamento
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag:
          <select id="tag" name="tag" value={ tag } onChange={ this.handleChange }>
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
          <button type="button" onClick={ this.onSubmit }>Adicionar despesa</button>
        </label>
      </div>
    );
  }

  render() {
    return (
      <div>
        <form>
          {this.renderForm()}
          {this.renderForm2()}
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchExpense: (expensex) => dispatch(setExpense(expensex)),
}
);

const mapStateToProps = (state) => ({
  valor: state.wallet.expenses.value,
});

WalletForm.propTypes = {
  valor: PropTypes.string.isRequired,
  dispatchExpense: PropTypes.func.isRequired,
  total: PropTypes.shape({
    reduce: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
