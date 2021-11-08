import React from 'react';
import Header from '../components/Header';
import Select from '../components/Select';
import { connect } from 'react-redux';
import { fetchCurrencies } from '../actions';

class Wallet extends React.Component {

  componentDidMount() {
    const { handleCurrencies } = this.props;
    handleCurrencies();
  }

  render() {
    const {moedas} = this.props;
    const payMethod = ['Cartão de crédito', 'Cartão de débito', 'Dinheiro'];
    const tag = ['Lazer', 'Trabalho', 'Alimentação', 'Transporte', 'Saúde'];
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
          <Select field="payment" label="Método de pagamento:" array={ payMethod } />
          <Select field="tag" label="Tag:" array={ tag } />
        </form>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  moedas: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  handleCurrencies: () => dispatch(fetchCurrencies()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
