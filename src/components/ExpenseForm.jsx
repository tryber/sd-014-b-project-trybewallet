import React, { Component } from 'react';

class ExpenseForm extends Component {
  render() {
    return (
      <form>
        <label htmlFor="valor">
          Valor
          <input type="text" id="valor" />
        </label>
        <label htmlFor="descricao">
          Descrição
          <input type="text" id="descricao" />
        </label>
        <label htmlFor="moeda">
          Moeda
          <select id="moeda">
            <option>moeda</option>
          </select>
        </label>
        <label htmlFor="pagamento">
          Método de Pagamento
          <select id="pagamento">
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

export default ExpenseForm;
