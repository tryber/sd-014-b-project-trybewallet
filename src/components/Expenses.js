import React from 'react';

class Expenses extends React.Component {
  render() {
    return (
      <form>

        <label htmlFor="value">
          Valor:
          <input type="text" name="value" id="value" />
        </label>

        <label htmlFor="description">
          Descrição
          <input type="text" name="description" id="description" />
        </label>

        <label htmlFor="currency">
          Moeda
          <select name="currency" id="currency">Moeda</select>
        </label>

        <label htmlFor="payment-method">
          Método de pagamento
          <select name="payment-method" id="payment-method">
            <option value="dinheiro">Dinehiro</option>
            <option value="cartao-de-credito">Cartão de Crédito</option>
            <option value="cartao-de-debito">Cartão de Débito</option>
          </select>
        </label>

        <label htmlFor="tag">
          <select name="tag" id="tag">
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

export default Expenses;
