import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { inputDespesa, valorConvertidoDespesa } from '../actions/index';

const URL_BASE = 'https://economia.awesomeapi.com.br/json/all';

class Inputs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expenses: [],
      expensesSoma: [],
      exchange: [],
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.getCurrencyApi();
  }

  async getCurrencyApi() {
    const response = await fetch(URL_BASE);
    const moedaResponse = await response.json();
    const arrayMoedas = Object.values(moedaResponse);
    this.setState({ exchange: arrayMoedas });
    return moedaResponse;
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  async handleSubmit() {
    const { despesa, valorConvertido } = this.props;
    const { value,
      description, currency, method, tag, expenses, expensesSoma } = this.state;
    const newId = expenses.length;
    const exchange = await this.getCurrencyApi();
    const valueCurrency = exchange[currency].ask;
    const getValueConvert = valueCurrency * value;
    const nameCurrency = exchange[currency].name.replace('/Real Brasileiro', '');
    const newCurrencies = [...expenses,
      { id: newId, value, description, currency, method, tag, exchangeRates: exchange }];
    const newExpenses = [...expensesSoma, {
      id: expensesSoma.length,
      value,
      description,
      currency,
      method,
      tag,
      getValueConvert,
      nameCurrency,
      valueCurrency }];
    despesa(newCurrencies);
    valorConvertido(newExpenses);

    this.setState({ expenses: newCurrencies,
      expensesSoma: newExpenses });
  }

  render() {
    const { value, description, currency, method, tag, exchange } = this.state;
    return (
      <form onSubmit={ this.handleSubmit }>
        <label htmlFor="value">
          Valor
          <input id="value" type="text" value={ value } onChange={ this.handleChange } />
        </label>
        <label htmlFor="description">
          Descrição
          <input
            id="description"
            type="text"
            value={ description }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="currency">
          Moeda
          <select id="currency" value={ currency } onChange={ this.handleChange }>
            {exchange.filter(({ codein }) => codein !== 'BRLT')
              .map(({ code }) => <option key={ code } value={ code }>{ code }</option>)}
          </select>
        </label>
        <label htmlFor="method">
          Método de pagamento
          <select id="method" value={ method } onChange={ this.handleChange }>
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select id="tag" value={ tag } onChange={ this.handleChange }>
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        <button type="button" onClick={ this.handleSubmit }>
          Adicionar despesa
        </button>
      </form>
    );
  }
}

Inputs.propTypes = {
  despesa: PropTypes.func.isRequired,
  valorConvertido: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  despesa: (e) => dispatch(inputDespesa(e)),
  valorConvertido: (e) => dispatch(valorConvertidoDespesa(e)),
});

export default connect(null, mapDispatchToProps)(Inputs);
