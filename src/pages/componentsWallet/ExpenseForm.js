import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  fetchCurrency,
  receiveExpenses,
  updateExpenses,
} from '../../actions/index';

// import Input from '../../components/Input';
import Select from '../../components/Select';
import Button from '../../components/Button';
import './ExpenseForm.css';

const methodPayment = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
const categories = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
const editExpense = (
  <span>
    Editar
    <br />
    Despesa
  </span>);
const addExpense = (
  <span>
    Adicionar
    <br />
    Despesa
  </span>
);
class ExpenseForm extends Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: 'USD',
      method: methodPayment[0],
      tag: categories[0],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.onClickSubmit = this.onClickSubmit.bind(this);
    this.setInitialState = this.setInitialState.bind(this);
    this.handleEditExpenses = this.handleEditExpenses.bind(this);
  }

  componentDidMount() {
    const { currencyFetch } = this.props;
    return currencyFetch();
  }

  // Nesta parte eu consultei o repositório do Luiz Gustavo
  // Fonte: https://github.com/tryber/sd-014-b-project-trybewallet/pull/32/commits/1177635a8cbc401cf6c30ae794a2106271a3fb09
  onClickSubmit() {
    const { saveWalletExpenses, allCurrencies, currencyFetch } = this.props;
    currencyFetch();
    saveWalletExpenses({ ...this.state, exchangeRates: allCurrencies });
    this.setInitialState();
  }

  setInitialState() {
    this.setState((prevState) => ({
      id: prevState.id + 1,
      value: '',
      currency: 'USD',
      method: methodPayment[0],
      tag: categories[0],
      description: '',
    }));
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleEditExpenses() {
    const { updateThisExpenses } = this.props;
    updateThisExpenses(this.state);
    this.setInitialState();
  }

  handleSelect() {
    const { currency, method, tag } = this.state;
    const { currencies } = this.props;
    return (
      <>
        <Select
          label="Moeda"
          options={ currencies.filter((coin) => coin !== 'USDT') }
          name="currency"
          onChange={ this.handleChange }
          value={ currency }
        />
        <Select
          label="Método de pagamento"
          options={ methodPayment }
          name="method"
          onChange={ this.handleChange }
          value={ method }
        />
        <Select
          label="Tag"
          options={ categories }
          name="tag"
          onChange={ this.handleChange }
          value={ tag }
        />
      </>
    );
  }

  render() {
    const { editing } = this.props;
    const { value, description } = this.state;
    return (
      <form className="expenseForm">
        <label htmlFor="value">
          Valor
          <input
            id="value"
            type="number"
            name="value"
            value={ value }
            onChange={ this.handleChange }
            className="input-value"
          />
        </label>
        <label htmlFor="description">
          Descrição
          <input
            id="description"
            type="text"
            name="description"
            value={ description }
            onChange={ this.handleChange }
            className="input-description"
          />
        </label>
        { this.handleSelect() }
        { editing ? (
          <Button
            onClick={ () => this.handleEditExpenses() }
            disabled={ false }
            label={ editExpense }
            className="btn edit-button"
          />
        ) : (
          <Button
            onClick={ this.onClickSubmit }
            disabled={ false }
            label={ addExpense }
            className="btn add-button"
          />
        ) }
      </form>
    );
  }
}

ExpenseForm.propTypes = {
  currencies: PropTypes.arrayOf().isRequired,
  currencyFetch: PropTypes.func.isRequired,
  saveWalletExpenses: PropTypes.func.isRequired,
  allCurrencies: PropTypes.objectOf().isRequired,
  editing: PropTypes.bool,
  updateThisExpenses: PropTypes.func.isRequired,
  editExpense: PropTypes.shape({}),
};

ExpenseForm.defaultProps = {
  editing: false,
  editExpense: {},
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
  allCurrencies: state.wallet.allCurrencies,
  editing: state.wallet.editing,
  editExpense: state.wallet.editExpense,
});

const mapDispatchToProps = (dispatch) => ({
  currencyFetch: () => dispatch(fetchCurrency()),
  saveWalletExpenses: (data) => dispatch(receiveExpenses(data)),
  updateThisExpenses: (data) => dispatch(updateExpenses(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseForm);
