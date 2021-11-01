import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Input from '../components/Input';
import Select from '../components/Select';

import { validWallet, saveExpenses } from '../actions/index';
import TableBody from '../components/TableBody';
import TableHead from '../components/TableHead';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      valor: '',
      descricao: '',
      moeda: '',
      method: '',
      tag: '',
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  async componentDidMount() {
    const { saveCurrencies } = this.props;

    const requestAPI = await fetch('https://economia.awesomeapi.com.br/json/all');
    const response = await requestAPI.json();
    const expenses = Object.keys(response).filter((expense) => expense !== 'USDT');
    saveCurrencies(expenses);
  }

  async handleClick() {
    const { valor, descricao, moeda, method, tag } = this.state;
    const { saveMoney } = this.props;
    const requestAPI = await fetch('https://economia.awesomeapi.com.br/json/all');
    const response = await requestAPI.json();
    const expenseObj = {
      valor,
      descricao,
      moeda,
      pagamento: method,
      tag,
      response,
    };
    saveMoney(expenseObj);
  }
  // Req. 8: Consegui resolver com a ajuda da Bel Albuquerque

  handleChange({ target }) {
    const { id, value } = target;
    this.setState({
      [id]: value,
    });
  }

  render() {
    const { currencies } = this.props;
    const { valor, descricao } = this.state;
    return (
      <section>
        <Header />
        <Input
          valor={ valor }
          title="Valor"
          id="valor"
          onChange={ this.handleChange }
        />
        <Input
          valor={ descricao }
          title="Descrição"
          id="descricao"
          onChange={ this.handleChange }
        />
        <Select
          title="Moeda"
          id="moeda"
          onChange={ this.handleChange }
          values={ currencies }
        />
        <Select
          title="método de pagamento"
          id="method"
          onChange={ this.handleChange }
          values={ ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'] }
        />
        <Select
          title="tag"
          id="tag"
          onChange={ this.handleChange }
          values={ ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'] }
        />
        <button
          type="button"
          onClick={ this.handleClick }
        >
          Adicionar despesa
        </button>
        <table>
          <TableHead />
          <TableBody />
        </table>
      </section>
    );
  }
}
// Ajuste no render com ajuda do Riba Jr. em call
const mapDispatchToProps = (dispatch) => ({
  saveMoney: (payload) => dispatch(saveExpenses(payload)),
  saveCurrencies: (payload) => dispatch(validWallet(payload)),
});

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
  currencies: state.wallet.currencies,
});

Wallet.propTypes = {
  saveMoney: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
  saveCurrencies: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
