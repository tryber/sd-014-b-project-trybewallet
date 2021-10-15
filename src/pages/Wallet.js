import PropTypes from 'prop-types';
import React from 'react';
import Header from '../components/header';
import WalletForm from '../components/formWallet';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <div>
        <Header email={ email } />
        <WalletForm />
      </div>);
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

export default Wallet;
