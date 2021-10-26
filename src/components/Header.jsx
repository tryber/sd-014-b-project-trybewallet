import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Header extends Component {
  render() {
    const { userEmail, expenses } = this.props;
    return (
      <header>
        <span data-testid="email-field">{ userEmail }</span>
        <span data-testid="total-field">
          { expenses.reduce((acc, curr) => {
            acc += (curr.exchangeRates[curr.currency].ask * curr.value);
            return acc;
          }, 0).toFixed([2]) }
        </span>
        <span data-testid="header-currency-field">BRL</span>
      </header>
    );
  }
}

Header.propTypes = {
  expenses: PropTypes.shape({
    reduce: PropTypes.func,
  }).isRequired,
  userEmail: PropTypes.string.isRequired,
};
