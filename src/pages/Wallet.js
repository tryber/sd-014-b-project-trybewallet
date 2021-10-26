import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import { validWallet, saveExpenses } from '../actions/index';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      valor: '',
      descricao: '',
      moeda: 'USD',
      pagamento: 'dinheiro',
      tag: 'alimentação',
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
    const { valor, descricao, moeda, pagamento, tag } = this.state;
    const { saveMoney } = this.props;

    const requestAPI = await fetch('https://economia.awesomeapi.com.br/json/all');
    const response = await requestAPI.json();
    const expenseObj = {
      valor,
      descricao,
      moeda,
      pagamento,
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

  // eslint-disable-next-line max-lines-per-function
  render() {
    const { currencies } = this.props;
    const { valor, descricao } = this.state;

    return (
      <section>
        <Header />
        <form>
          <label htmlFor="valor">
            Valor
            <input
              type="text"
              id="valor"
              value={ valor }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="descricao">
            Descrição
            <input
              type="text"
              id="descricao"
              value={ descricao }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="moeda">
            Moeda
            <select id="moeda" onChange={ this.handleChange }>
              { currencies.map((expense) => (
                <option
                  key={ expense }
                  value={ expense }
                >
                  { expense }
                </option>
              ))}
            </select>
          </label>
          <label htmlFor="pagamento">
            Método de Pagamento
            <select id="pagamento" onChange={ this.handleChange }>
              <option value="dinheiro"> Dinheiro </option>
              <option value="cartão de  crédito"> Cartão de Crédito </option>
              <option value="cartão de débito"> Cartão de Débito </option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag
            <select id="tag" onChange={ this.handleChange }>
              <option value="alimentação"> Alimentação </option>
              <option value="lazer"> Lazer </option>
              <option value="trabalho"> Trabalho </option>
              <option value="transporte"> Transporte </option>
              <option value="saúde"> Saúde </option>
            </select>
          </label>
        </form>
        <button
          type="button"
          onClick={ this.handleClick }
        >
          Adicionar despesa
        </button>
      </section>
    );
  }
}

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
