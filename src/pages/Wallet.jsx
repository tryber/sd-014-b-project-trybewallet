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
    const { loading, expenses } = this.props;
    return (
      <section>
        <div>TrybeWallet</div>
        { !loading ? <Header expenses={ expenses } /> : null }
        <WalletForm />
      </section>
    );
  }
}

Wallet.propTypes = {
  fetchCurrency: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  expenses: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  fetchCurrency: () => dispatch(walletActions.fetchCurrency()),
});

const mapStateToProps = (state) => ({
  loading: state.wallet.loading,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
