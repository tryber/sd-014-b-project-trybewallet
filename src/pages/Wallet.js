import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <div>
        TrybeWallet
        <header data-testid="email-field">{ email }</header>
        <p data-testid="total-field">0</p>
        <p data-testid="header-currency-field">BRL</p>
      </div>

    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  wallet: state.wallet,
});

Wallet.propTypes = {
  email: PropTypes.objectOf(PropTypes.string).isRequired,
//   wallet: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
};

export default connect(mapStateToProps)(Wallet);
