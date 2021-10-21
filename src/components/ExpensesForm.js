import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getRates } from '../actions';

const URL = 'https://economia.awesomeapi.com.br/json/all';

class ExpensesForm extends Component {
  constructor() {
    super();

    this.state = {
      arrayOfCoins: [],
      id: 0,
      value: '0',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.currencyApi = this.currencyApi.bind(this);
  }

  componentDidMount() {
    this.currencyApi();
  }

  async currencyApi() {
    const getApi = await fetch(URL);
    const response = await getApi.json();
    const coins = Object.keys(response).filter((coin) => coin !== 'USDT');
    this.setState({
      arrayOfCoins: coins,
    });
  }

  handleChange({ target: { id, value } }) {
    this.setState({ [id]: value });
  }

  // Tive ajuda do Michael e do Luiz para desenvolver essa parte.
  async handleClick() {
    const { id, value, description, currency, method, tag } = this.state;
    const { sendValues } = this.props;
    const getApi = await fetch(URL);
    const exchangeRates = await getApi.json();
    const addExpense = {
      id, value, description, currency, method, tag, exchangeRates,
    };
    sendValues(addExpense);
    this.setState((prev) => ({
      id: prev.id + 1,
    }));
  }

  render() {
    const { arrayOfCoins, value, description, currency, method, tag } = this.state;
    const { handleChange, handleClick } = this;
    return (
      <form>
        <label htmlFor="value">
          Valor:
          <input type="text" id="value" value={ value } onChange={ handleChange } />
        </label>
        <label htmlFor="description">
          Descrição:
          <input
            type="text"
            id="description"
            value={ description }
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="currency">
          Moeda:
          <select id="currency" value={ currency } onChange={ handleChange }>
            { arrayOfCoins.map(
              (coin) => (<option key={ coin }>{coin}</option>),
            ) }
          </select>
        </label>
        <label htmlFor="method">
          Método de pagamento:
          <select id="method" value={ method } onChange={ handleChange }>
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag:
          <select id="tag" value={ tag } onChange={ handleChange }>
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
        <button type="button" onClick={ handleClick }>Adicionar despesa</button>
      </form>
    );
  }
}

ExpensesForm.propTypes = {
  sendValues: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  wallet: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  sendValues: (rates) => dispatch(getRates(rates)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesForm);
