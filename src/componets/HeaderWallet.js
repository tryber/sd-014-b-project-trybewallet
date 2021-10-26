import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class HeaderWallet extends React.Component {

  getTotalExpenses() {
    const { expenses } = this.props;

    return expenses.reduce((acc, crr) => {
      const { currency, value, exchangeRates } = crr;
      const { ask } = exchangeRates[currency];
      return acc + (value * ask);
    }, 0);
  }

  convertExpense({ value, currency, exchangeRates }) {
    return Number(value) * Number(exchangeRates[currency].ask);
  }

  render() {
    const { email } = this.props;

    const total = this.getTotalExpenses();

    return (
      <div>
        <h3 data-testid="email-field">{ email }</h3>
        <span>Despesas Totais: </span>
        <span data-testid="total-field">{ total }</span>
        <span data-testid="header-currency-field">BRL</span>
      </div>
    );
  }
}

HeaderWallet.propTypes = {
  email: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(HeaderWallet);
