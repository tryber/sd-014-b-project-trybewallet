import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import { validWalletExpenses } from '../actions/index';

class Wallet extends React.Component {
  async componentDidMount() {
    const { saveMoney } = this.props;

    const requestAPI = await fetch('https://economia.awesomeapi.com.br/json/all');
    const response = await requestAPI.json();
    const expenses = Object.keys(response).filter((expense) => expense !== 'USDT');
    saveMoney(expenses);
  }

  render() {
    const { expenses } = this.props;
    console.log(expenses);
    return (
      <section>
        <Header />
        <form>
          <label htmlFor="valor">
            Valor
            <input type="text" id="valor" />
          </label>
          <label htmlFor="descricao">
            Descrição
            <input type="text" id="descricao" />
          </label>
          <label htmlFor="moeda">
            Moeda
            <select id="moeda">
              { expenses.map((expense) => (<option key={ expense }>{ expense }</option>))}
            </select>
          </label>
          <label htmlFor="pagamento">
            Método de Pagamento
            <select id="pagamento">
              <option> Dinheiro </option>
              <option> Cartão de Crédito </option>
              <option> Cartão de Débito </option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag
            <select id="tag">
              <option> Alimentação </option>
              <option> Lazer </option>
              <option> Trabalho </option>
              <option> Transporte </option>
              <option> Saúde </option>
            </select>
          </label>
        </form>
        <button type="button">
          Adicionar
        </button>
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  saveMoney: (payload) => dispatch(validWalletExpenses(payload)),
});

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

Wallet.propTypes = {
  saveMoney: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
