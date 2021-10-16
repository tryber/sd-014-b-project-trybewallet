import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { userEmail, totalExpense } = this.props;
    return (
      <header>
        <span data-testid="email-field">{ userEmail }</span>
        <span data-testid="total-field">{` Despesa total: ${totalExpense} `}</span>
        <span data-testid="header-currency-field">BRL</span>
      </header>
    );
  }
}

Header.propTypes = ({
  userEmail: PropTypes.string,
  totalExpense: PropTypes.number,
}).isRequired;

export default Header;
