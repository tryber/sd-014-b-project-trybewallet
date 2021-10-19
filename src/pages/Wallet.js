import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import WalletHeader from '../components/WalletHeader';

class Wallet extends Component {
  render() {
    const { email } = this.props;
    return (
      <main>
        <WalletHeader email={ email } />
      </main>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps, null)(Wallet);
