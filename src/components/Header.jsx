import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { email, total, currency } = this.props;
    return (
      <header>
        <h2>TrybeWallet</h2>
        <span data-testid="email-field">{ email }</span>
        <span data-testid="total-field">{ `$ ${+(total)} ` }</span>
        <span data-testid="header-currency-field">{ currency }</span>
      </header>
    );
  }
}

Header.propTypes = PropTypes.objectOf(PropTypes.string).isRequired;

const mapState = ({ user, wallet }) => ({
  email: user.email,
  total: wallet.expenses,
  currency: wallet.currencies,
});

export default connect(mapState)(Header);
