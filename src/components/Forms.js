import React, { Component } from 'react';

class Forms extends Component {
  render() {
    return (
      <form>
        <label htmlFor="value">
          Valor:
          <input id="value" type="text" name="value" />
        </label>
        <label htmlFor="description">
          Descrição:
          <input id="description" type="text" name="description" />
        </label>
        <label htmlFor="currency">
          Moeda:
          <select id="currency" name="currency">
            <option>USD</option>
            <option>EUR</option>
            <option>BRL</option>
          </select>
        </label>
        <label htmlFor="payment-method">
          Método de pagamento:
          <select id="payment-method" name="payment-method">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag:
          <select id="tag" name="tag">
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

export default Forms;
