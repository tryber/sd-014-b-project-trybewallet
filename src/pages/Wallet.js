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
      id: '',
      currency: 'USD',
      description: '',
      tag: 'Alimentação',
      method: 'Dinheiro',
      value: '',
    };
  }

  componentDidMount() {
    this.setInitialState();
  }

  async setInitialState() {
    const { fetchInfo, wallet: { expenses } } = this.props;
    await fetchInfo();
    this.setState({
      id: !expenses.length ? 0 : expenses.length,
    });
  }

  handleChange({ target }) {
    const { id, value } = target;
    this.setState({
      [id]: value,
    });
  }

  async saveExpense() {
    const { id, currency, description, tag, method, value } = this.state;
    const { addNewExpense } = this.props;
    this.setState({
      id: id + 1,
    });
    const rateInfo = await fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json());
    console.log(Object.values(rateInfo));
    const newItem = [id, value, description, currency, method, tag];
    addNewExpense(newItem);
  }

  render() {
    const { user: { email }, wallet: { expenses, currencies } } = this.props;
    const initials = Object.keys(currencies).filter((e) => e !== 'USDT');
    const payment = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const genre = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    return (
      <div>
        <header>
          <h1>TrybeWallet</h1>
          <h5 data-testid="email-field">{ email }</h5>
          <h5 data-testid="total-field">{ !expenses.length ? 0 : expenses }</h5>
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
          <label htmlFor="genre">
            Tag:
            <select id="genre" onChange={ this.handleChange }>
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
