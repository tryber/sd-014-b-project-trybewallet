import React, { Component } from 'react';

class AddExpense extends Component {
  render() {
    return (
      <form>
        <label htmlFor="value-input">
          Valor
          <input type="text" name="value-input" id="value-input" />
        </label>
        <label htmlFor="description-input">
          Descrição
          <input type="text" name="description-input" id="description-input" />
        </label>
        <label htmlFor="currency-input">
          Moeda
          <select name="currency-input" id="currency-input">{}</select>
        </label>
        <label htmlFor="payment-method-input">
          Método de pagamento
          <select name="payment-method-input" id="payment-method-input">
            <option value="dinheiro">Dinheiro</option>
            <option value="cartao-de-credito">Cartão de crédito</option>
            <option value="cartao-de-debito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag-input">
          Tag
          <select name="tag-input" id="tag-input">
            <option value="alimentacao">Alimentação</option>
            <option value="lazer">Lazer</option>
            <option value="trabalho">Trabalho</option>
            <option value="transporte">Transporte</option>
            <option value="saude">Saúde</option>
          </select>
        </label>
      </form>

    );
  }
}

export default AddExpense;
