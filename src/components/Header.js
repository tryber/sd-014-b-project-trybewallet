import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { userEmail, expenses } = this.props;
    const totalValue = expenses.reduce((acc, current) => {
      const value = Number(current.value);
      const priceCurrency = Number(current.exchangeRates[current.currency].ask);
      return acc + (value * priceCurrency);
    }, 0);
    return (
      <header>
        <h1>TrybeWallet</h1>
        <h4 data-testid="email-field">{ userEmail }</h4>
        <h4 data-testid="total-field">{ totalValue }</h4>
        <h4 data-testid="header-currency-field">BRL</h4>
      </header>
    );
  }
}

Header.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  userEmail: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(Header);
