import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addExpense, fetchAPI } from '../actions/index';

class Wallet extends Component {
  constructor() {
    super();
    this.setInitialState = this.setInitialState.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.saveExpense = this.saveExpense.bind(this);
    this.state = {
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      exchangeRates: '',
    };
  }

  componentDidMount() {
    this.setInitialState();
  }

  async setInitialState() {
    const { fetchInfo } = this.props;
    await fetchInfo();
  }

  handleChange({ target }) {
    const { id, value } = target;
    this.setState({
      [id]: value,
    });
  }

  async saveExpense() {
    const { addNewExpense } = this.props;
    const currencyInfo = await fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json());
    this.setState({
      exchangeRates: currencyInfo,
    });
    addNewExpense(this.state);
  }

  sumCart() {
    const { wallet: { expenses } } = this.props;
    const reducer = (acc, { value, currency, exchangeRates }) => (
      acc + value * exchangeRates[currency].ask
    );
    const total = Object.values(expenses).reduce(reducer, 0);
    return total.toFixed(2);
  }

  render() {
    const { user: { email }, wallet: { currencies } } = this.props;
    const initials = Object.keys(currencies).filter((e) => e !== 'USDT');
    const payment = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const genre = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    return (
      <div>
        <header>
          <h1>TrybeWallet</h1>
          <h5 data-testid="email-field">{ email }</h5>
          <h5 data-testid="total-field">{ this.sumCart() }</h5>
          <h5 data-testid="header-currency-field">BRL</h5>
        </header>
        <form>
          <label htmlFor="value">
            Valor:
            <input type="text" id="value" onChange={ this.handleChange } />
          </label>
          <label htmlFor="description">
            Descrição:
            <input type="text" id="description" onChange={ this.handleChange } />
          </label>
          <label htmlFor="currency">
            Moeda:
            <select type="text" id="currency" onChange={ this.handleChange }>
              { initials.map((e, index) => <option key={ index }>{ e }</option>) }
            </select>
          </label>
          <label htmlFor="method">
            Método de Pagamento:
            <select id="method" onChange={ this.handleChange }>
              { payment.map((e, index) => <option key={ index }>{ e }</option>) }
            </select>
          </label>
          <label htmlFor="tag">
            Tag:
            <select id="tag" onChange={ this.handleChange }>
              { genre.map((e, index) => <option key={ index }>{ e }</option>) }
            </select>
          </label>
          <button type="button" onClick={ () => this.saveExpense() }>
            Adicionar despesa
          </button>
        </form>
      </div>
    );
  }
}

Wallet.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string,
  }),
  wallet: PropTypes.shape({
    expenses: PropTypes.element,
  }),
}.isRequired;

const mapStateToProps = (state) => ({
  user: state.user,
  wallet: state.wallet,
});

const mapDispatchToProps = (dispatch) => ({
  fetchInfo: () => dispatch(fetchAPI()),
  addNewExpense: (payload) => dispatch(addExpense(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
