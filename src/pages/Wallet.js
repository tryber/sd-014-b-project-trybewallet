import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Form from '../components/Form';

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = {
      currencies: [],
      totalValue: 0,
    };

    this.updateValue = this.updateValue.bind(this);
    this.fetchCurrencies = this.fetchCurrencies.bind(this);
  }

  componentDidMount() {
    this.fetchCurrencies();
  }

  async fetchCurrencies() {
    const URL = await fetch('https://economia.awesomeapi.com.br/json/all');
    const result = await URL.json();
    const coins = Object.keys(result).filter((coin) => (
      coin !== 'USDT'));
    this.setState({
      currencies: coins,
    });
  }

  updateValue() {
    const { expenses } = this.props;

    const totalValue = expenses.reduce((acc, { value, exchangeRates, currency }) => {
      const expenseValue = Number(value);
      const exchangeRate = Number(exchangeRates[currency].ask);

      return acc + (expenseValue * exchangeRate);
    }, 0);

    this.setState({
      totalValue,
    });
  }

  render() {
    const { userEmail } = this.props;
    const { currencies, totalValue } = this.state;
    return (
      <>
        <Header userEmail={ userEmail } totalValue={ totalValue } />
        <Form currencies={ currencies } updateValue={ this.updateValue } />
      </>
    );
  }
}

Wallet.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  userEmail: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(Wallet);
