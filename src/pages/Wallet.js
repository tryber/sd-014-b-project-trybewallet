import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Select from '../components/Select';
// import fetchCurrencyAPI from '../services/currencyAPI';
import { fetchCurrencies } from '../actions';

class Wallet extends React.Component {
  componentDidMount() {
    const { receiveCurrencies } = this.props;
    receiveCurrencies();
  }

  render() {
    const payments = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const tag = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    const { moedas } = this.props;
    return (
      <>
        <Header />
        <form>
          <label htmlFor="expense">
            Valor:
            <input type="text" name="expense" id="expense" />
          </label>
          <label htmlFor="description">
            Descrição:
            <input type="text" name="description" id="description" />
          </label>
          <Select field="currency" label="Moeda:" array={ moedas } />
          <Select field="payment" label="Método de pagamento:" array={ payments } />
          <Select field="tag" label="Tag:" array={ tag } />
        </form>
      </>
    );
  }
}

Wallet.propTypes = {
  moedas: PropTypes.arrayOf(PropTypes.any).isRequired,
  receiveCurrencies: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  moedas: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  receiveCurrencies: () => dispatch(fetchCurrencies()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
