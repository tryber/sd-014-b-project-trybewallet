import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.getTotalExpenses = this.getTotalExpenses.bind(this);
  }

  getTotalExpenses() {
    const { expenses } = this.props;

    return expenses.reduce(
      (total, expense) => total + this.convertExpense(expense),
      0,
    );
  }

  convertExpense({ value, currency, exchangeRates }) {
    return Number(value) * Number(exchangeRates[currency].ask);
  }

  render() {
    const { userEmail } = this.props;

    return (
      <header>
        <h1>TrybeWallet</h1>
        <div>
          Email:
          {' '}
          <span data-testid="email-field">{ userEmail }</span>
        </div>
        <div>
          Despesa Total:
          {' '}
          <span data-testid="total-field">{ this.getTotalExpenses() }</span>
          {' '}
          <span data-testid="header-currency-field">BRL</span>
        </div>
      </header>
    );
  }
}

function mapStateToProps(state) {
  return {
    userEmail: state.user.email,
    expenses: state.wallet.expenses,
  };
}

export default connect(mapStateToProps)(Header);

Header.propTypes = {
  userEmail: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};
