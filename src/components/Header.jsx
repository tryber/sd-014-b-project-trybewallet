import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { emailData: { email }, arrayExpenses } = this.props;
    // Feito durante call com o grupo de Frontend Online
    const sumTotalExpenses = arrayExpenses ? arrayExpenses
      .reduce((initialValue, { value, currency, exchangeRates }) => initialValue
      + value * exchangeRates[currency].ask, 0) : 0;
    console.log(arrayExpenses);
    return (
      <header>
        <span data-testid="email-field">{ email }</span>
        <p data-testid="total-field">0</p>
        <span data-testid="header-currency-field">BRL</span>
        <p data-testid="total-field">{ `Total: ${sumTotalExpenses.toFixed(2)}` }</p>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  emailData: state.user,
  arrayExpenses: state.wallet.expenses,
});

Header.propTypes = {
  emailData: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, null)(Header);
