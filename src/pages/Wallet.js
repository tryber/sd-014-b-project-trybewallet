import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Wallet extends React.Component {
  render() {
    const { login } = this.props;
    const { email } = login;
    return (
      <header>
        <h4 data-testid="email-field">{email}</h4>
        <h4 data-testid="total-field">0</h4>
        <h4 data-testid="header-currency-field">BRL</h4>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  login: state.user,
});

Wallet.propTypes = {
  login: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(Wallet);
