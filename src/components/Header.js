import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// https://github.com/tryber/sd-014-b-project-trybewallet/blob/bruno-faria-trybewallet/src/components/Header.js
// código do Bruno Farias

class Header extends Component {
  constructor() {
    super();

    this.totalValue = this.totalValue.bind(this);
  }

  totalValue() {
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
    const { totalValue } = this;

    return (
      <header>
        <h1 data-testid="email-field">{email}</h1>
        <p>
          Despesa Total
          {' '}
          <span data-testid="total-field">{totalValue().toFixed(2)}</span>
          {' '}
          <span data-testid="header-currency-field">BRL</span>
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
