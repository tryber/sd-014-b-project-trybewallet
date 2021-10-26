import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import currencyAPI from '../services/currencyAPI';
import { walletUpdate } from '../actions/index';

// Falta apenas converter a totalExpenses para real.

class Forms extends Component {
  constructor(props) {
    super(props);

    this.state = {
      coins: [],
      id: -1,
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      exchangeRates: {},
      totalExpenses: 0,
    };

    this.updateState = this.updateState.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  async componentDidMount() {
    const response = await currencyAPI();
    const arrayOfCoins = [];
    Object.keys(response).map((coin) => {
      if (coin !== 'USDT') {
        arrayOfCoins.push(coin);
      }
      return arrayOfCoins;
    });
    this.updateState(arrayOfCoins);
  }

  updateState(arrayOfCoins) {
    this.setState({
      coins: arrayOfCoins,
    });
  }

  handleChange({ target }) {
    const { id, value } = target;
    this.setState({
      [id]: value,
    });
  }

  async handleClick() {
    const { currency, value } = this.state;
    const { addExpense } = this.props;
    const response = await currencyAPI();
    const calcCode = Object.values(response).find((coin) => coin.code === currency);
    const expenses = parseFloat(value) * calcCode.ask;
    this.setState((prevState) => ({
      id: prevState.id + 1,
      exchangeRates: response,
      totalExpenses: parseFloat(prevState.totalExpenses) + parseFloat(expenses),
    }));
    addExpense(this.state);
  }

  render() {
    const { coins, value, description, currency, method, tag } = this.state;
    const methods = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const allTags = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    return (
      <form>
        <label htmlFor="value">
          Valor:
          <input id="value" type="text" value={ value } onChange={ this.handleChange } />
        </label>
        <label htmlFor="description">
          Descrição:
          <input
            id="description"
            type="text"
            value={ description }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="currency">
          Moeda:
          <select id="currency" value={ currency } onChange={ this.handleChange }>
            { coins.map((coin, index) => <option key={ index }>{ coin }</option>) }
          </select>
        </label>
        <label htmlFor="method">
          Método de pagamento:
          <select id="method" value={ method } onChange={ this.handleChange }>
            { methods.map((pay, index) => <option key={ index }>{ pay }</option>) }
          </select>
        </label>
        <label htmlFor="tag">
          Tag:
          <select id="tag" value={ tag } onChange={ this.handleChange }>
            { allTags.map((tags, index) => <option key={ index }>{ tags }</option>) }
          </select>
        </label>
        <button type="button" className="addButton" onClick={ this.handleClick }>
          Adicionar despesa
        </button>
      </form>
    );
  }
}

Forms.propTypes = {
  addExpense: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  addExpense: (data) => dispatch(walletUpdate(data)),
});

export default connect(null, mapDispatchToProps)(Forms);
