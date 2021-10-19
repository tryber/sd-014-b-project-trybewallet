import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SelectCurrency from './SelectCurrency';
import './Expenses.css';
import { saveExpenses } from '../actions';
import SelectTAG from './SelectTAG';

const INITIAL_STATE = {
  id: 0,
  value: 0,
  description: '',
  currency: 'USD',
  method: 'Dinheiro',
  tag: 'Alimentação',
  exchangeRates: '',
};

class Expenses extends React.Component {
  constructor() {
    super();
    this.state = INITIAL_STATE;

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetState = this.resetState.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  async handleSubmit() {
    const urlAPI = 'https://economia.awesomeapi.com.br/json/all';
    const getData = await fetch(urlAPI)
      .then((response) => response.json())
      .catch((error) => new Error(error));
    this.setState({
      exchangeRates: getData,
    });
    const { saveExpenseData, lastId } = this.props;
    console.log(lastId.length);
    if (lastId !== []) {
      this.setState({
        id: lastId.length,
      });
    }
    saveExpenseData(this.state);
    this.resetState();
  }

  resetState() {
    this.setState(INITIAL_STATE);
  }

  render() {
    const { value, description, currency, method, tag } = this.state;
    return (
      <form>
        <label htmlFor="value">
          Valor:
          <input
            id="value"
            type="number"
            name="value"
            min="0"
            value={ value }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="description">
          Descrição:
          <input
            id="description"
            type="text"
            name="description"
            value={ description }
            onChange={ this.handleChange }
          />
        </label>
        <SelectCurrency
          value={ currency }
          id="select-currency-expense"
          handleChange={ this.handleChange }
        />
        <label htmlFor="payment-method">
          Método de Pagamento:
          <select
            value={ method }
            id="payment-method"
            name="method"
            onChange={ this.handleChange }
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de Crédito</option>
            <option value="Cartão de débito">Cartão de Débito</option>
          </select>
        </label>
        <SelectTAG value={ tag } handleChange={ this.handleChange } />
        <button type="button" onClick={ this.handleSubmit }>Adicionar despesa</button>
      </form>
    );
  }
}

Expenses.propTypes = {
  saveExpenseData: PropTypes.func.isRequired,
  lastId: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
  })).isRequired,
};

const mapStateToProps = (state) => ({
  lastId: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  saveExpenseData: (values) => dispatch(saveExpenses(values)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Expenses);
