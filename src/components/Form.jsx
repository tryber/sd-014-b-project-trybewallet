import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label>
          Valor
          <input type="text" name="value" />
        </label>
        <label>
          Descrição
          <input type="text" name="description" />
        </label>
        <label>
          Moeda
          <select name="coin"></select>
        </label>
        <label>
          Método de pagamento
          <select name="paymentMethod">
            <option value="money">Dinheiro</option>
            <option value="credit-card">Cartão de crédito</option>
            <option value="debit-card">Cartão de débito</option>
          </select>
        </label>
        <label>
          Tag
          <select name="tag">
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
}

export default Form;
