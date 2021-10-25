import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import WalletForm from '../components/WalletForm';
import { submitCurrencies } from '../actions';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchCurrencies();
  }

  async fetchCurrencies() {
    const { getCurrencies } = this.props;
    const URL = 'https://economia.awesomeapi.com.br/json/all';
    const result = await fetch(URL);
    const response = await result.json();
    // Descobri o "delete" com a ajuda da Renata Teixeira
    delete response.USDT;
    getCurrencies(response);
    this.setState({ loading: false });
  }

  render() {
    const { loading } = this.state;
    return (
      <div>
        <Header />
        {loading
          ? <h1>Carregando...</h1>
          : <WalletForm />}
      </div>
    );
  }
}

Wallet.propTypes = {
  getCurrencies: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: (currencies) => dispatch(submitCurrencies(currencies)),
});

export default connect(null, mapDispatchToProps)(Wallet);
