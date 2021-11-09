import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sendCurrencies } from '../actions';
import Select from './Select';
import Button from './Button';

const paymentOptions = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
const expensesOptions = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
const URL = 'https://economia.awesomeapi.com.br/json/all';

class FormExpenses extends Component {
  constructor() {
    super();

    this.state = {
      // id: 0,
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };

    this.fetchCurrency = this.fetchCurrency.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.renderSelect = this.renderSelect.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  componentDidMount() {
    this.fetchCurrency();
  }

  async handleClick() {
    const { setExpenses } = this.props;
    const fetchAPI = await fetch(URL);
    const exchangeRates = await fetchAPI.json();
    setExpenses({ ...this.state, exchangeRates });
    this.setState((prev) => ({ id: prev.id + 1 }));
  }

  handleEdit() {
    const { addExpenses } = this.props;
    addExpenses(this.state);
  }

  async fetchCurrency() {
    const { setCurrencies } = this.props;
    const fetchAPI = await fetch(URL);
    const responseAPI = await fetchAPI.json();
    const currency = Object.keys(responseAPI)
      .filter((currencies) => currencies !== 'USDT');
    setCurrencies(currency);
  }

  handleChange({ target: { id, value } }) {
    this.setState({ [id]: value });
  }

  renderSelect() {
    const { currency, method, tag } = this.state;
    const { currencies } = this.props;
    return (
      <>
        <Select
          id="currency"
          label="Moeda"
          onChange={ this.handleChange }
          value={ currency }
          info={ currencies }
        />
        <Select
          id="method"
          label="Método de pagamento"
          onChange={ this.handleChange }
          value={ method }
          info={ paymentOptions }
        />
        <Select
          id="tag"
          label="Tag"
          onChange={ this.handleChange }
          value={ tag }
          info={ expensesOptions }
        />
      </>
    );
  }

  render() {
    const { value, description } = this.state;
    const { isEditing } = this.props;
    return (
      <form action="">
        <input
          inputValue={ value }
          label="Valor"
          type="number"
          id="value"
        />
        <input
          inputValue={ description }
          label="Descrição"
          type="text"
          id="description"
          onChange={ this.handleChange }
        />
        { this.renderSelect() }
        {
          isEditing
            ? <Button onClick={ this.handleEdit }>Editar despesas</Button>
            : <Button onClick={ this.handleClick }>Adicionar despesas</Button>
        }
      </form>
    );
  }
}

FormExpenses.propTypes = {
  setCurrencies: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  addExpenses: PropTypes.func.isRequired,
  setExpenses: PropTypes.func.isRequired,
  isEditing: PropTypes.bool.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  setCurrencies: (currencies) => dispatch(sendCurrencies(currencies)),
  addExpenses: (expenseID) => dispatch(addExpenses(expenseID)),
  setExpenses: (rates) => dispatch(exchangeRating(rates)),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  isEditing: state.wallet.isEditing,
});

export default connect(mapStateToProps, mapDispatchToProps)(FormExpenses);
