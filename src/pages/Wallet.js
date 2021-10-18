import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import WalletHeader from './WalletHeader';
import WalletForm from '../components/WalletForm';
import { fetchCurrencies } from '../actions/index';

class Wallet extends React.Component {
  componentDidMount() {
    const { saveCurrencies } = this.props;
    saveCurrencies();
  }

  renderCurrencies(arrayOfCurrencies) {
    const filterCurrencies = arrayOfCurrencies.filter(
      (currency) => currency !== 'USDT',
    ); // Deve-se remover a opção USDT

    return filterCurrencies.map((currency, index) => (
      <option key={ `currency ${index}` }>
        { currency }
      </option>
    ));
  }

  render() {
    const { email, currencies } = this.props;
    return (
      <div>
        <WalletHeader email={ email } />
        <WalletForm
          currencies={ currencies }
          renderCurrencies={ this.renderCurrencies }
        />
      </div>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  saveCurrencies: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  saveCurrencies: () => dispatch(fetchCurrencies()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
