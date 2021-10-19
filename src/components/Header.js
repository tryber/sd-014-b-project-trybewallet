import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  sumTotalExpenses = (expenses) => {
    let total = 0;
    const value = expenses.map((element) => element.value);
    const currency = expenses.map((element) => element.currency);
    const exchangeRateArray = expenses
      .map((element, index) => element.exchangeRates[currency[index]].ask);
    for (let index = 0; index < value.length; index += 1) {
      const myValue = value[index];
      const myAsk = exchangeRateArray[index];
      const subTotal = myValue * myAsk;
      total += subTotal;
    }
    return total.toFixed(2);
  }

  render() {
    const { email, expenses } = this.props;
    return (
      <header>
        <span data-testid="email-field">{email}</span>
        <span data-testid="total-field">
          {
            `Despesa Total: R$ ${this.sumTotalExpenses(expenses)}`
          }
        </span>
        <span data-testid="header-currency-field">BRL</span>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);
