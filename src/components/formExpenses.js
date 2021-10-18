import React from 'react';

const paymentMethods = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];

const expenseCategory = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

function FormExpenses() {
  return (
    <form>
      <label htmlFor="value">
        Valor:
        <input
          type="text"
          id="value"
          placeholder="Digite o Valor"
        />
      </label>
      <label htmlFor="description">
        Descrição:
        <input
          type="text"
          id="description"
          placeholder="Digite a Descrição"
        />
      </label>
      <label htmlFor="currency">
        Moeda:
        <select id="currency">
          <option>BRL</option>
        </select>
      </label>
      <label htmlFor="paymentMethod">
        Método de pagamento:
        <select id="paymentMethod">
          { paymentMethods.map((method) => (
            <option key={ method } value={ method }>{method}</option>)) }
        </select>
      </label>
      <label htmlFor="category">
        Tag:
        <select id="category">
          { expenseCategory.map((category) => (
            <option key={ category } value={ category }>{category}</option>)) }
        </select>
      </label>
    </form>
  );
}

export default FormExpenses;
