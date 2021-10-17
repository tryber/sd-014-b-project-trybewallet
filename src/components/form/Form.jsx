import React from 'react';

export default function Form() {
  return (
    <form>
      <label htmlFor="value">
        Valor:
        <input type="number" name="value" id="value" placeholder="Valor" />
      </label>
      <label htmlFor="description">
        Descrição:
        <input
          type="text"
          name="description"
          id="description"
          placeholder="Descrição"
        />
      </label>
      <label htmlFor="currency">
        Moeda:
        <select name="currency" id="currency">
          <option value="">Vazio</option>
        </select>
      </label>
      <label htmlFor="payment-method">
        Método de pagamento:
        <select
          name="payment-method"
          id="payment-method"
        >
          <option value="cash">Dinheiro</option>
          <option value="credit-card">Cartão de crédito</option>
          <option value="debit-card">Cartão de débito</option>
        </select>
      </label>
      <label htmlFor="tag">
        Tag:
        <select name="tag" id="tag">
          <option value="food">Alimentação</option>
          <option value="leisure">Lazer</option>
          <option value="work">Trabalho</option>
          <option value="transport">Transporte</option>
          <option value="health">Saúde</option>
        </select>
      </label>
    </form>
  );
}
