import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchWallet } from '../actions';
import Header from '../components/Header';
import Input from '../components/Input';
import Select from '../components/Select';

class Wallet extends React.Component {
  componentDidMount() {
    const { fetchWalletApi } = this.props;

    fetchWalletApi();
  }

  render() {
    const paymentMethods = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const category = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    const { email, currencies, expenses } = this.props;
    const currenciesFiltered = currencies.filter((currenty) => currenty !== 'USDT');
    console.log(currencies);
    return (
      <section>
        <Header email={ email } />
        <form>
          <Input name="Valor" array={ expenses } />
          <Input name="Descrição" />
          <Select name="Moeda" array={ currenciesFiltered } />
          <Select name="Método de pagamento" array={ paymentMethods } />
          <Select name="Tag" array={ category } />
        </form>
      </section>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  currencies: PropTypes.arrayOf().isRequired,
  expenses: PropTypes.arrayOf().isRequired,
  fetchWalletApi: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  fetchWalletApi: () => dispatch(fetchWallet()),
});

const mapStateToProps = (state) => ({
  email: state.user.email,
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
