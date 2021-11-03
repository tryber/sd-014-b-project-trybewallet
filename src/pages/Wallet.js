import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';
import { expenseAction } from '../actions';
import fetchAPI from '../services/API';
import ExpenseTable from '../components/ExpenseTable';

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = {
      options: [],
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };

    this.pushOptions = this.pushOptions.bind(this);
    this.handInp = this.handInp.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.tagOp = this.tagOp.bind(this);
  }

  async componentDidMount() {
    const resolve = await fetchAPI();
    const coinsOption = [];
    Object.keys(resolve).map((option) => {
      if (option !== 'USDT') {
        coinsOption.push(option);
      }
      return coinsOption;
    });
    this.pushOptions(coinsOption);
  }

  async handleSubmit() {
    const { value, description, currency, method, tag } = this.state;
    const { saveExpenses, expenses } = this.props;
    const returnApi = await this.fetchExchangeRates();
    const sendState = {
      value,
      description,
      currency,
      method,
      tag,
      id: expenses.length,
      exchangeRates: returnApi,
    };
    saveExpenses(sendState);
  }

  async fetchExchangeRates() {
    const url = 'https://economia.awesomeapi.com.br/json/all';
    const resolve = await (await fetch(url)).json();
    return resolve;
  }

  handInp({ target: { id, value } }) {
    this.setState({
      [id]: value,
    });
  }

  pushOptions(coinsOption) {
    this.setState({
      options: coinsOption,
    });
  }

  tagOp() {
    const { tag } = this.state;
    return (
      <label htmlFor="tag">
        Tag
        <select id="tag" value={ tag } onChange={ this.handInp }>
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
      </label>
    );
  }

  render() {
    const { options, value, description, currency, method } = this.state;
    const form = (
      <form>
        <label htmlFor="value">
          Valor
          <input type="text" id="value" value={ value } onChange={ this.handInp } />
        </label>
        <label htmlFor="description">
          Descrição
          <input
            type="text"
            id="description"
            value={ description }
            onChange={ this.handInp }
          />
        </label>
        <label htmlFor="currency">
          Moeda
          <select id="currency" value={ currency } onChange={ this.handInp }>
            { options.map((option, index) => <option key={ index }>{ option }</option>) }
          </select>
        </label>
        <label htmlFor="method" value={ method } onChange={ this.handInp }>
          Método de pagamento
          <select id="method">
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        { this.tagOp() }
        <button type="button" onClick={ this.handleSubmit }>Adicionar despesa</button>
      </form>
    );

    return (
      <>
        <Header />
        { form }
        <ExpenseTable />
      </>
    );
  }
}

Wallet.propTypes = {
  saveExpenses: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  saveExpenses: (state) => dispatch(expenseAction(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
