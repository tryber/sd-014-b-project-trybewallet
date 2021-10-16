import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../Components/Header';
import Form from '../Components/Form';
import { addCurrencies, addExpenses } from '../actions';

class Wallet extends Component {
  constructor() {
    super();

    this.updateTotalValue = this.updateTotalValue.bind(this);
    this.handleAddExpenses = this.handleAddExpenses.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      totalExpenses: 0,
      value: '',
      description: '',
      currency: 'USD',
      method: '',
      tag: 'Alimentação',
    };
  }

  async componentDidMount() {
    await this.fetchingValuesCurrencys();
  }

  async fetchingValuesCurrencys() {
    const { addCurrenciesDispatch } = this.props;
    const fetching = await fetch('https://economia.awesomeapi.com.br/json/all');
    const fetchingJson = await fetching.json();
    const currencies = Object.keys(fetchingJson).filter(
      (currency) => (currency !== 'USDT'),
    );
    addCurrenciesDispatch(currencies);
    return fetchingJson;
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  async handleAddExpenses() {
    const {
      state,
      props: { addExpensesDispatch, expenses },
      state: { currencyCoin },
    } = this;
    const currencys = await this.fetchingValuesCurrencys();

    addExpensesDispatch(
      { id: expenses.length, ...state, exchangeRates: { ...currencys } },
    );
    this.updateTotalValue(currencys, currencyCoin);
  }

  updateTotalValue(currencys) {
    const { value, currency, totalExpenses } = this.state;
    const valueCoinSelected = currencys[currency].ask;
    console.log(valueCoinSelected);
    const valueMultiplyCoinSelected = ((value * valueCoinSelected) * 100) / 100;
    this.setState({ totalExpenses: totalExpenses + valueMultiplyCoinSelected });
  }

  render() {
    const { props: { email, currencies }, state: {
      totalExpenses,
      value,
      description,
      currency,
      method,
      tag,
    } } = this;

    return (
      <main className="wallet-page">
        <Header email={ email } totalExpenses={ totalExpenses } />
        <article className="container-form">
          <Form
            currencies={ currencies }
            onChange={ this.handleChange }
            value={ value }
            description={ description }
            currency={ currency }
            method={ method }
            tag={ tag }
            onClick={ this.handleAddExpenses }
          />
        </article>
      </main>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  addExpensesDispatch: PropTypes.func.isRequired,
  addCurrenciesDispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    email: state.user.email,
    expenses: state.wallet.expenses,
    currencies: state.wallet.currencies,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addExpensesDispatch: (state) => dispatch(addExpenses(state)),
    addCurrenciesDispatch: (currencies) => dispatch(addCurrencies(currencies)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
