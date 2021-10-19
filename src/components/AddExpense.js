import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { fetchCurrenciesList } from '../services/currencyQuotesApi';
import InputDefault from './InputDefault';
import SelectDefault from './SelectDefault';
import { addExpenseAction } from '../actions/index';

class AddExpense extends Component {
  constructor() {
    super();

    this.state = {
      value: '',
      description: '',
      currency: '',
      method: '',
      tag: '',
      currencies: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.getCurrenciesList = this.getCurrenciesList.bind(this);
  }

  componentDidMount() {
    this.getCurrenciesList();
  }

  onSubmit(event) {
    event.preventDefault();
    const { value, description, currency, method, tag } = this.state;
    const { addExpense, expenses } = this.props;
    const id = expenses.length ? expenses[expenses.length - 1].id + 1 : 0;
    addExpense({ id, value, description, currency, method, tag });
  }

  async getCurrenciesList() {
    const currencies = await fetchCurrenciesList();
    this.setState({ currencies });
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { currencies, value, description } = this.state;
    return (
      <form>
        <InputDefault
          name="value"
          onChange={ this.handleChange }
          value={ value }
        >
          Valor
        </InputDefault>
        <InputDefault
          name="description"
          onChange={ this.handleChange }
          value={ description }
        >
          Descrição
        </InputDefault>
        <SelectDefault
          name="currency"
          options={ currencies }
          onChange={ this.handleChange }
        >
          Moeda
        </SelectDefault>
        <SelectDefault
          name="method"
          options={ ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'] }
          onChange={ this.handleChange }
        >
          Método de pagamento
        </SelectDefault>
        <SelectDefault
          name="tag"
          options={ ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'] }
          onChange={ this.handleChange }
        >
          Tag
        </SelectDefault>
        <button
          type="submit"
          onClick={ this.onSubmit }
        >
          Adicionar Despesa
        </button>
      </form>

    );
  }
}

AddExpense.propTypes = {
  addExpense: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object),
};

AddExpense.defaultProps = {
  expenses: [],
};

const mapDispatchToProps = (dispatch) => ({
  addExpense: (state) => dispatch(addExpenseAction(state)),
});

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, mapDispatchToProps)(AddExpense);
