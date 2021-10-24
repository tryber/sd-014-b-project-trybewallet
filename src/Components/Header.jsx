import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  constructor() {
    super();

    this.totalExpenses = this.totalExpenses.bind(this);
  }
  // recebi ajuda do meu amigo Kauan Carvalho https://github.com/kcda1102

  totalExpenses() {
    const { expenses } = this.props;
    const totalValue = expenses.reduce((acc, expense) => {
      const currencyValue = Number(expense.exchangeRates[expense.currency].ask);
      acc += Number(expense.value) * currencyValue;
      return acc;
    }, 0);
    return totalValue;
  }

  render() {
    const { email } = this.props;
    return (
      <header>
        <h2 data-testid="email-field">
          Email:
          {' '}
          {email}
        </h2>
        <p data-testid="total-field">
          {this.totalExpenses().toFixed(2)}
        </p>
        <p data-testid="header-currency-field">
          BRL
        </p>
      </header>
    );
  }
}

const mapStateToProps = ({ user: { email }, wallet: { expenses } }) => ({
  email,
  expenses,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(Header);
