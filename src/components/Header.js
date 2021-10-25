import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  totalExpense() {
    const { expenses } = this.props;
    if (expenses) {
      const totalExpenses = expenses
        .reduce((total, expense) => total
        + expense.value
        * expense.exchangeRates[expense.currency].ask,
        0);
      return totalExpenses.toFixed(2);
    }
    return 0;
  }

  render() {
    const { email } = this.props;
    return (
      <header>
        <div data-testid="email-field">{email}</div>
        <div data-testid="total-field">{ this.totalExpense() }</div>
        <div data-testid="header-currency-field">BRL</div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, null)(Header);
