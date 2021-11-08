import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Form from '../components/forms';
import { currenciesAction } from '../actions';
import Table from '../components/table';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      moedas: [],
    };
    this.getCurrencies = this.getCurrencies.bind(this);
  }

  componentDidMount() {
    this.getCurrencies();
  }

  async getCurrencies() {
    const { sendCurrencies } = this.props;
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await response.json();
    const result = Object.keys(data).filter((coin) => coin !== 'USDT');
    this.setState({ moedas: result });
    sendCurrencies(Object.keys(data));
  }

  render() {
    const { moedas } = this.state;
    const { email, expenses } = this.props;
    // logica pega do repositorio de Riba Jr
    const totalExpenses = expenses ? expenses
      .reduce((initialValue, { value, currency, exchangeRates }) => initialValue
      + value * exchangeRates[currency].ask, 0) : 0;
    return (
      <div>
        <header>
          <h2 data-testid="email-field">{email}</h2>
          <h2 data-testid="total-field">{`Total: ${totalExpenses.toFixed(2)}`}</h2>
          <h2 data-testid="header-currency-field">BRL</h2>
        </header>
        <Form moedas={ moedas } />
        <Table />
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
  currencies: state.wallet.currencies,
  email: state.user.email,
});

const mapDispatchToProps = (dispatch) => ({
  sendCurrencies: (coins) => dispatch(currenciesAction(coins)),
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  sendCurrencies: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
