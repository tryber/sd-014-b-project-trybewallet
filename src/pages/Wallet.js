import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FormWallet from '../components/formWallet';
import { fetchDataCoins } from '../actions/index';

class Wallet extends React.Component {
  componentDidMount() {
    const { fetchCoins } = this.props;
    fetchCoins();
  }

  render() {
    const { email } = this.props;
    return (
      <>
        <header data-testid="email-field">{ email }</header>
        <p data-testid="total-field">0</p>
        <p data-testid="header-currency-field">BRL</p>
        <FormWallet />
      </>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  fetchCoins: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  wallet: state.wallet,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCoins: () => dispatch(fetchDataCoins()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
