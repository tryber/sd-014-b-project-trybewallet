import React from 'react';

const paymentOptions = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
const expenseOptions = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

export default function FormExpense() {
  return (
    <form>
      <label htmlFor="value">
        Valor:
        <input type="text" id="value" />
      </label>
      <label htmlFor="description">
        Descrição:
        <input type="text" id="description" />
      </label>
      <label htmlFor="currency">
        Moeda:
        <select id="currency">Moeda</select>
      </label>
      <label htmlFor="paymentMethod">
        Método de pagamento:
        <select id="paymentMethod">
          { paymentOptions.map((method) => (
            <option key={ method } value={ method }>{method}</option>)) }
        </select>
      </label>
      <label htmlFor="category">
        Tag:
        <select id="category">
          { expenseOptions.map((method) => (
            <option key={ method } value={ method }>{method}</option>)) }
        </select>
      </label>
    </form>

  );
}
