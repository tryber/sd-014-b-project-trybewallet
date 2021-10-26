import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../Components/Header';
import FormWallet from '../Components/FormWallet';
import { addCurrency } from '../actions';

class Wallet extends React.Component {
  componentDidMount() {
    this.fetchCoins();
  }

  async fetchCoins() {
    const { getcurrencie } = this.props;
    const URL_API = 'https://economia.awesomeapi.com.br/json/all';
    const result = await fetch(URL_API);
    const response = await result.json();
    const coin = Object.keys(response).filter((element) => element !== 'USDT');
    getcurrencie(coin);
  }

  render() {
    const { currencies } = this.props;
    return (
      <main>
        <Header />
        <FormWallet coinsResult={ currencies } />
      </main>
    );
  }
}

Wallet.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  getcurrencie: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  getcurrencie: (enter) => dispatch(addCurrency(enter)),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
