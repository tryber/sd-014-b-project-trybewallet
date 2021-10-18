import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../Components/Header';
import Form from '../Components/Form';
import Table from '../Components/Table';
import { addCurrencies, addExpenses, updateTotalExpenses } from '../actions';
import './wallet.css';

class Wallet extends Component {
  constructor() {
    super();

    this.updateTotalValue = this.updateTotalValue.bind(this);
    this.handleAddExpenses = this.handleAddExpenses.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
  }

  componentDidMount() {
    console.log('Montou');
    this.fetchingValuesCurrencys();
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
    const { value, currency } = this.state;
    const { updateTotalExpensesDispatch, totalExpenses } = this.props;
    const valueCoinSelected = currencys[currency].ask;
    const valueMultiplyCoinSelected = Number((value * valueCoinSelected).toFixed([2]));
    updateTotalExpensesDispatch(totalExpenses + valueMultiplyCoinSelected);
  }

  mapExpenses() {
    const { expenses } = this.props;
    return expenses.map((expense) => <Table key={ expense.id } expense={ expense } />);
  }

  render() {
    const { props: { email, currencies, totalExpenses }, state: {
      value,
      description,
      currency,
      method,
      tag,
    } } = this;

    return (
      <main className="wallet-page">
        <Header email={ email } totalExpenses={ totalExpenses } />
        <section className="container-form">
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
        </section>
        <section className="tables-container">
          { this.mapExpenses() }
        </section>
      </main>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  totalExpenses: PropTypes.number.isRequired,
  addExpensesDispatch: PropTypes.func.isRequired,
  addCurrenciesDispatch: PropTypes.func.isRequired,
  updateTotalExpensesDispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    email: state.user.email,
    expenses: state.wallet.expenses,
    currencies: state.wallet.currencies,
    totalExpenses: state.wallet.totalExpenses,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addExpensesDispatch: (state) => dispatch(addExpenses(state)),
    addCurrenciesDispatch: (currencies) => dispatch(addCurrencies(currencies)),
    updateTotalExpensesDispatch: (totalExpenses) => dispatch(
      updateTotalExpenses(totalExpenses),
    ),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
