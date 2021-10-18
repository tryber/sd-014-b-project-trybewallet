import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchRates } from '../actions';

export default class WalletForm extends Component {
  constructor(props) {
    super(props);
    this.state = { // estados exigidos nos requisitos
      id: -1,
      value: '',
      description: '',
      currency: '',
      method: '',
      tag: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { currencies, renderCurrencies } = this.props;
    const { value } = this.state;
    return (
      <form>
        <label htmlFor="value-input">
          Valor:
          <input
            id="value-input"
            name="value"
            value={ value }
            onChange={ this.handleChange }
          />
        </label>
        <br />
        <label htmlFor="desciption-input">
          Descrição:
          <input id="desciption-input" name="desciption" />
        </label>
        <br />
        <label htmlFor="currency-select">
          Moeda:
          <select id="currency-select">
            { renderCurrencies(currencies) }
          </select>
        </label>
        <br />
        <label htmlFor="payment-method-select">
          Método de pagamento:
          <select id="payment-method-select">
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <br />
        <label htmlFor="tag-select">
          Tag
          <select id="tag-select">
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}
