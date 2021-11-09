import React from 'react';

class ExpensesForm extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="value">
          Valor
          <input
            type="text"
          />
        </label>
        <label htmlFor="description">
          Descrição
          <input
            type="text"
          />
        </label>
        <label htmlFor="currency">
          Moeda
          <select>
            <option>BRL</option>
          </select>
        </label>
        <label htmlFor="method">
          Método de pagamento
          <select>
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select>
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

export default ExpensesForm;
