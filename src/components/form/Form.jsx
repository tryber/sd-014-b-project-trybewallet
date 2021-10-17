import React from 'react';

export default function Form() {
  return (
    <div>
      <form>
        <input label="Valor:" type="number" name="value" placeholder="Valor" />
        <input
          label="Descrição:"
          type="text"
          name="description"
          placeholder="Descrição"
        />
        <select label="Moeda:" name="currency" />
        <select label="Método de pagamento:" name="paymentMethod">
          <option value="cash">Dinheiro</option>
          <option value="credit-card">Cartão de cŕedito</option>
          <option value="debit-card">Cartão de débito</option>
        </select>
        <select label="Tag" name="tag">
          <option value="food">Alimentação</option>
          <option value="leisure">Lazer</option>
          <option value="work">Trabalho</option>
          <option value="transport">Transporte</option>
          <option value="health">Saúde</option>
        </select>
      </form>
    </div>
  );
}
