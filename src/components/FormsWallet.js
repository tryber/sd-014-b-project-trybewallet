import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { submitValue } from '../actions';

class FormsWallet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      response: [],
      value: '',
      description: '',
      method: 'Dinheiro',
      currency: 'USD',
      tag: 'Alimentação',
    };

    this.requestApi = this.requestApi.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.inputDescription = this.inputDescription.bind(this);
  }

  componentDidMount() {
    this.requestApi();
  }

  async requestApi() {
    const url = await fetch('https://economia.awesomeapi.com.br/json/all');
    const responseJson = await url.json();
    const response = Object.keys(responseJson)
      .filter((moeda) => moeda !== 'USDT');
    this.setState({ response });
  }

  async handleClick() {
    const { submitForm } = this.props;
    const { method, description, tag, currency, value } = this.state;
    const url = await fetch('https://economia.awesomeapi.com.br/json/all');
    const responseJson = await url.json();
    const objExpense = {
      method,
      description,
      tag,
      currency,
      value,
      responseJson,
    };
    submitForm(objExpense);
  }

  handleChange({ target }) {
    this.setState({ [target.id]: target.value });
  }

  inputDescription(description) {
    return (
      <label htmlFor="description">
        Descrição
        <input
          type="text"
          id="description"
          onChange={ this.handleChange }
          value={ description }
        />
      </label>);
  }

  render() {
    const { response, description, value } = this.state;

    return (
      <form action="">
        <label htmlFor="value">
          Valor
          <input type="text" id="value" onChange={ this.handleChange } value={ value } />
        </label>
        { this.inputDescription(description) }
        <label htmlFor="currency">
          Moeda
          <select id="currency" onChange={ this.handleChange }>
            { response.map((money) => (
              <option value={ money } key={ money }>
                { money }
              </option>
            )) }
          </select>
        </label>
        <label htmlFor="method">
          Método de pagamento
          <select id="method" onChange={ this.handleChange }>
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select id="tag" onChange={ this.handleChange }>
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        <button type="button" onClick={ this.handleClick }>
          Adicionar despesa
        </button>
      </form>
    );
  }
}

FormsWallet.propTypes = {
  submitForm: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  submitForm: (payloadValue) => dispatch(submitValue(payloadValue)),
});

export default connect(null, mapDispatchToProps)(FormsWallet);
