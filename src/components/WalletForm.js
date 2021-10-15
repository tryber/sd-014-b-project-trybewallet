import React, { Component } from 'react';

export default class WalletForm extends Component {
  render() {
    return (
      <form>
        <label htmlFor="value-input">
          Valor
          <input id="value-input" name="value" />
        </label>
        <label htmlFor="desciption-input">
          Descrição
          <input id="desciption-input" name="desciption" />
        </label>
        <label htmlFor="currency-select">
          Moeda
          <select id="currency-select">
            <option>Currency A</option>
            <option>Currency B</option>
          </select>
        </label>
        <label htmlFor="payment-method-select">
          Método de pagamento
          <select id="payment-method-select">
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
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
