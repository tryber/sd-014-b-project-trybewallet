import React from 'react';

function ExpenseForm() {
  return (
    <form>
      <label htmlFor="value-field">
        Valor
        <input
          type="text"
          id="value-field"
          placeholder="Digite o valor da despesa"
          maxLength="3"
        />
      </label>

      <label htmlFor="expense-description">
        <input type="text" placeholder="descrição da despesa" id="expense-description" />
        Descrição
      </label>

      <label htmlFor="currency">
        <select id="currency">
          <option value="aaa">aaa</option>
        </select>
        Moeda
      </label>

      <label htmlFor="paymentMethod">
        <select id="paymentMethod">
          <option value="dinheiro">Dinheiro</option>
          <option value="debitCard">Cartão de débito</option>
          <option value="creditCard">Cartão de crédito</option>
        </select>
        Método de pagamento
      </label>

      <label htmlFor="tag">
        <select id="tag">
          <option value="food">Alimentação</option>
          <option value="lazer">Lazer</option>
          <option value="trabalho">Trabalho</option>
          <option value="transporte">Transporte</option>
          <option value="saude">Saúde</option>
        </select>
        Tag
      </label>
    </form>
  );
}

export default ExpenseForm;
