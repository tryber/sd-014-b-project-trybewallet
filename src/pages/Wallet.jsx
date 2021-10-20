import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import WalletForm from '../components/WalletForm';
import * as walletActions from '../actions/walletActions';

class Wallet extends React.Component {
  componentDidMount() {
    const { fetchCurrency } = this.props;
    fetchCurrency();
  }

  render() {
    return (
      <section>
        <div>TrybeWallet</div>
        <Header />
        <WalletForm />
      </section>
    );
  }
}

Wallet.propTypes = {
  fetchCurrency: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  fetchCurrency: () => dispatch(walletActions.fetchCurrency()),
});

export default connect(null, mapDispatchToProps)(Wallet);
