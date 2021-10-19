import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import WalletForm from '../components/WalletForm';

class Wallet extends React.Component {
  getTotalExpenses(expense) {
    const totalExpense = Object.values(expense);
    if (totalExpense.length === 0) {
      return 0;
    }
    const total = totalExpense.reduce((acc, expenses) => {
      const subTotal = expenses.value * expenses.exchangeRates[expenses.currency].ask;
      acc += subTotal;
      return acc;
    }, 0);
    return parseFloat(total).toFixed(2);
  }

  render() {
    const { email, expenses } = this.props;
    return (
      <>
        <header>
          <span data-testid="email-field">{ email }</span>
          <span data-testid="total-field">{ this.getTotalExpenses(expenses) }</span>
          <span data-testid="header-currency-field">BRL</span>
        </header>

        <WalletForm />
      </>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string,
}.isRequired;

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(Wallet);
