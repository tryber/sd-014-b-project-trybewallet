import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/header';
import WalletForm from '../components/formWallet';
import { fecthCurrencies } from '../actions/index';

class Wallet extends React.Component {
  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  render() {
    const { email, currencies } = this.props;
    return (
      <div>
        <Header email={ email } />
        <WalletForm currencies={ currencies } />
      </div>);
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  getCurrencies: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(fecthCurrencies()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
