import React, { Component } from 'react'
import PropTypes from 'prop-types';

class WalletHeader extends Component {
  render() {
    const { email } = this.props;
    return (
      <header>
        <span data-testid="email-field">{`Email: ${email}`}</span>
        <span data-testid="total-field">Despesa total: R$ 0,00</span>
        <span data-testid="header-currency-field">BRL</span>
      </header>
    )
  }
}

WalletHeader.propTypes = {
  email: PropTypes.string.isRequired,
};
