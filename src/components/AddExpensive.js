import React, { Component } from 'react';
// import fetchCoinsApi from '../services/fetchCoinsApi';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { exchangeRating } from '../actions';
import Input from './Input';
import Select from './Select';

const paymentOptions = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
const expenseOptions = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
const URL = 'https://economia.awesomeapi.com.br/json/all';

class AddExpensive extends Component {
  constructor() {
    super();
    this.state = {
      allCoins: [],
      id: 0,
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
    this.fetchCurrency = this.fetchCurrency.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.fetchCurrency();
  }

  async handleClick() {
    const {
      value,
      description,
      currency,
      id,
      method,
      tag,
    } = this.state;
    // const { setExpenses } = this.props;
    const getApi = await fetch(URL);
    const exchangeRates = await getApi.json();
    this.setState((prev) => ({
      id: prev.id + 1,
    }));
    const addExpense = {
      value, description, id, exchangeRates, currency, method, tag,
    };
    setExpenses(addExpense);
  }

  handleChange({ target: { id, value } }) {
    this.setState({ [id]: value });
  }

  async fetchCurrency() {
    const getApi = await fetch(URL);
    const response = await getApi.json();
    const coins = Object.keys(response).filter((currency) => currency !== 'USDT');
    this.setState({ allCoins: coins });
  }

  render() {
    const {
      allCoins,
      value,
      description,
      currency,
      method,
      tag,
    } = this.state;
    return (
      <form>
        <Input
          inputValue={ value }
          onChange={ this.handleChange }
          label="Valor:"
          id="value"
        />
        <Input
          inputValue={ description }
          onChange={ this.handleChange }
          label="Descrição:"
          id="description"
        />
        <Select
          id="currency"
          label="Moeda:"
          array={ allCoins }
          value={ currency }
          onChange={ this.handleChange }
        />
        <Select
          id="method"
          label="Método de pagamento:"
          array={ paymentOptions }
          value={ method }
          onChange={ this.handleChange }
        />
        <Select
          id="tag"
          label="Tag:"
          array={ expenseOptions }
          value={ tag }
          onChange={ this.handleChange }
        />
        <button type="button" onClick={ this.handleClick }>Adicionar despesa</button>
      </form>

    );
  }
}

AddExpensive.propTypes = {
  // dispatchSetValue: PropTypes.func.isRequired,
  wallet: PropTypes.shape({
    length: PropTypes.number,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  setExpenses: (rates) => dispatch(exchangeRating(rates)),
});

const mapStateToProps = (state) => ({ wallet: state.wallet.expenses });

export default connect(mapStateToProps, mapDispatchToProps)(AddExpensive);
