import React, { Component } from 'react';

class ExpenseTypeInput extends Component {
  render() {
    return (
      <label htmlFor="expense-type">
        Tag
        <select id="expense-type" name="expese-type-input">
          <option value="Alimentacao">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saude">Saúde</option>
        </select>
      </label>
    );
  }
}

export default ExpenseTypeInput;
