import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './WalletHeader.css'
export default class WalletHeader extends Component {
  render() {
    const { email } = this.props;
    return (
      <div>
        <span className="wallet-span" data-testid="email-field">{`Email: ${email}`}</span>
        <span className="wallet-span" data-testid="total-field">Despesa: R$ 0,00</span>
        <span className="wallet-span" data-testid="header-currency-field">BRL</span>
      </div>
    );
  }
}

WalletHeader.propTypes = {
  email: PropTypes.string.isRequired,
};