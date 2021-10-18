import React, { Component } from 'react';

export default class FormWallet extends Component {
  render() {
    return (
      <div>
        <label htmlFor="valor">
          Valor
          <input
            type="text"
            id="valor"
          />
        </label>
        <label htmlFor="descricao">
          Descrição
          <input
            type="text"
            id="descricao"
          />
        </label>
        <label htmlFor="moeda">
          Moeda
          <select id="moeda">
            <option>Test</option>
          </select>
        </label>
        <label htmlFor="metodoPagamento">
          Método de pagamento
          <select id="metodoPagamento">
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
      </div>
    );
  }
}
