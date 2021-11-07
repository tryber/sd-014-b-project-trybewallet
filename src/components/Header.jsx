import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { expenses, email } = this.props;
    const totalExpenses = expenses
      .map((expense) => (expense.value) * expense.exchangeRates[expense.currency].ask)
      .reduce((acc, cur) => (acc + cur), 0);
    const totalExpense = Intl.NumberFormat('pt-BR',
      { style: 'currency', currency: 'BRL' }).format(totalExpenses).replace(',', '.');
    return (
      <header>
        <span data-testid="email-field">{ email }</span>
        <span data-testid="total-field">{ totalExpense}</span>
        <span data-testid="header-currency-field">BRL</span>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.number).isRequired,
};

function mapStateToProps(state) {
  return {
    email: state.user.email,
  };
}

export default connect(mapStateToProps)(Header);
