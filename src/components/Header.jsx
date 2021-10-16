import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  getInfos = (getTotal) => {
    const { email, expenses } = this.props;
    if (getTotal) {
      return expenses.length < 1 ? 0
        : expenses.reduce(({ value }, acc) => {
          acc += +(value);
          return acc;
        }, 0);
    }
    return email !== '' ? email
      : JSON.parse(localStorage.getItem('loginEmail'));
  }

  render() {
    const { localCurrency } = this.props;
    return (
      <header>
        <h2>TrybeWallet</h2>
        <span data-testid="email-field">{ this.getInfos() }</span>
        <span data-testid="total-field">{ ` $ ${+(this.getInfos(true))} ` }</span>
        <span data-testid="header-currency-field">{ localCurrency }</span>
      </header>
    );
  }
}

Header.propTypes = PropTypes.objectOf(PropTypes.any).isRequired;

const mapState = (state) => {
  const { user: { email }, wallet: { expenses, localCurrency } } = state;
  return {
    email,
    expenses,
    localCurrency,
  };
};

export default connect(mapState)(Header);
