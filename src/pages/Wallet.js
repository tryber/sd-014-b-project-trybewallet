import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <header>
        <span data-testid="email-field">
          Email:
          {' '}
          { email }
          {' '}
        </span>
        <span>Despesa Total: </span>
        <span data-testid="total-field">0</span>
        <span data-testid="header-currency-field">
          {' '}
          BRL
        </span>
      </header>
    );
  }
}

function mapStateToProps(state) {
  return {
    email: state.user.email,
  };
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Wallet);
