import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import WalletForm from './WalletForm';
import { fetchDataAction } from '../actions/walletAction';

class Wallet extends React.Component {
  componentDidMount() {
    const { dispatchFetchedData } = this.props;
    dispatchFetchedData();
  }

  render() {
    const { email } = this.props;
    return (
      <header>
        <div>
          TrybeWallet
          <span data-testid="email-field">{ email }</span>
          <span>0</span>
          <span data-testid="header-currency-field">BRL</span>
        </div>
        <WalletForm />
      </header>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  dispatchFetchedData: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  dispatchFetchedData: () => dispatch(fetchDataAction()),
});

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
