import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  soma = (expenses) => {
    let valorTotal = 0;
    const values = expenses.map((index) => index.value);
    const currency = expenses.map((index) => index.currency);
    const exchange = expenses
      .map((element, index) => element.exchangeRates[currency[index]].ask);
    values.forEach((value, index) => {
      const subValue = value * exchange[index];
      valorTotal += subValue;
    });
    return valorTotal.toFixed(2);
  }

  render() {
    const { email, expenses } = this.props;
    return (
      <header>
        <span data-testid="email-field">{ email }</span>
        <span data-testid="total-field">
          { `Despesa Total: R$ ${this.soma(expenses)}` }
        </span>
        <span data-testid="header-currency-field">BRL</span>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps)(Header);
