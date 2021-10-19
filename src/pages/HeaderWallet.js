import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class HeaderWallet extends Component {
  constructor() {
    super();
    this.sumExpenses = this.sumExpenses.bind(this);
  }

  sumExpenses(expenses) {
    if (expenses.length < 1) return 0;
  }

  render() {
    const { email, currency, expenses } = this.props;
    return (
      <header>
        <span data-testid="email-field">{ email }</span>
        <span data-testid="total-field">{ this.sumExpenses(expenses)}</span>
        <span data-testid="header-currency-field">{ currency }</span>
      </header>
    );
  }
}

HeaderWallet.propTypes = {
  currency: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.any).isRequired,
};

const mapState = ({ user, wallet }) => ({
  email: user.email,
  expenses: wallet.expenses,
  currency: wallet.currency,
});

export default connect(mapState)(HeaderWallet);
