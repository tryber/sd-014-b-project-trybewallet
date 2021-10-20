import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getConversion } from '../actions';

class Header extends Component {
  getInfos = (getTotal) => {
    const { email, expenses } = this.props;
    if (getTotal) {
      return expenses.length < 1 ? 0
        : getConversion(expenses).reduce((acc, cur) => {
          acc += +(cur);
          return acc;
        }, 0);
    }
    return email !== '' ? email
      : JSON.parse(localStorage.getItem('loginEmail'));
  }

  render() {
    const { localCurrency } = this.props;
    return (
      <header className="header">
        <h2>TrybeWallet</h2>
        <span data-testid="email-field">{ `Email: ${this.getInfos()}` }</span>
        <div>
          <span data-testid="total-field">
            { ` $ ${(+(this.getInfos(true))).toFixed(2)} ` }
          </span>
          <span data-testid="header-currency-field">{ localCurrency }</span>
        </div>
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
