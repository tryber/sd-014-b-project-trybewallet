import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  brlValueIn = (currency, exchangeRates) => exchangeRates[currency].ask

  render() {
    const { globalState:
      { user: { email }, wallet: { expenses } } } = this.props;
    const { brlValueIn } = this;
    const total = expenses.reduce(
      (acc, { currency, value, exchangeRates }) => {
        const valueInt = parseInt(value, 10);
        const ValueBrl = brlValueIn(currency, exchangeRates) * valueInt;
        return acc + ValueBrl;
      }, 0,
    );
    const moeda = 'BRL';
    return (
      <header>
        <span data-testid="email-field">{email}</span>
        <span data-testid="total-field">{total}</span>
        <span data-testid="header-currency-field">{moeda}</span>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  globalState: state,
});

export default connect(mapStateToProps)(Header);

Header.propTypes = {
  globalState: PropTypes.objectOf(PropTypes.object).isRequired,
};
