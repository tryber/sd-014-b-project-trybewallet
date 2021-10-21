import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { email, expenses } = this.props;
    const totalExpense = expenses.reduce(
      (acc, { value, exchangeRates, currency }) => (
        acc + value * exchangeRates[currency].ask), 0,
    );

    return (
      <header>
        <div data-testid="email-field">{email}</div>
        <div data-testid="total-field">
          { `Gastos Totais: ${totalExpense}` }
        </div>
        <div data-testid="header-currency-field">
          BRL
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.shape({
    reduce: PropTypes.func,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(Header);
