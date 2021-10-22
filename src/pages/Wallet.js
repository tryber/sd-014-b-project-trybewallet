import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FormWallet from '../components/formWallet';
import { fetchDataCoins } from '../actions/index';

class Wallet extends React.Component {
  constructor() {
    super();

    this.getTotalExpenses = this.getTotalExpenses.bind(this);
  }

  componentDidMount() {
    const { fetchCoins } = this.props;
    fetchCoins();
  }

  getTotalExpenses() {
    const { expenses } = this.props;
    let total = 0;
    if (expenses.length > 0) {
      expenses.forEach(({ value, currency, exchangeRates }) => {
        const { ask } = exchangeRates[currency];
        total += Number(value) * Number(ask);
      });
    }
    return total;
  }

  render() {
    const { email } = this.props;
    return (
      <>
        <header data-testid="email-field">
          { email }
          <p data-testid="total-field">{ this.getTotalExpenses() }</p>
        </header>
        <p data-testid="header-currency-field">BRL</p>
        <FormWallet />
      </>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  fetchCoins: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.any).isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCoins: () => dispatch(fetchDataCoins()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
