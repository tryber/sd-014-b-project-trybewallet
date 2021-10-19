import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function Wallet({ email }) {
  const INITIAL_VALUE = 0;
  return (
    <header className="header">
      <p data-testid="email-field">
        { email }
      </p>
      <p data-testid="total-field">
        { INITIAL_VALUE }
      </p>
      <p data-testid="header-currency-field">
        BRL
      </p>
    </header>
  );
}

function mapStateToProps({ user: { email } }) {
  return { email };
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Wallet);
