import React, { Component } from 'react';

class FormsWallet extends Component {
  render() {
    return (
      <form action="">
        <label htmlFor="value">
          Valor
          <input type="number" id="value" />
        </label>
        <label htmlFor="description">
          Descrição
          <textarea type="text" id="description" />
        </label>
        <label htmlFor="currency">
          Moeda
          <select id="currency">
            <option>teste</option>
          </select>
        </label>
        <label htmlFor="method">
          Método de pagamento
          <select id="method">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select id="tag">
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

export default FormsWallet;
