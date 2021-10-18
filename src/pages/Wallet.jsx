import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <header>
        <h1>TrybeWallet</h1>
        <span>
          Email:
          <span data-testid="email-field">
            { email }
          </span>
        </span>
        <span>
          Despesa Total:
          <span data-testid="total-field">
            0
          </span>
          <span data-testid="header-currency-field">
            BRL
          </span>
        </span>
      </header>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps)(Wallet);
