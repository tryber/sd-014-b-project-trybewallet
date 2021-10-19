import React from 'react';

class Forms extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="input-expense">
          Valor
          <input type="number" id="input-expense" name="expense" />
        </label>
        <label htmlFor="input-description">
          Descrição
          <input id="input-description" name="description" type="text" />
        </label>
        <label htmlFor="input-coin">
          Moeda
          <select id="input-coin" name="coin">
            <option>nada</option>
          </select>
        </label>
        <label htmlFor="input-method">
          Método de pagamento
          <select name="method" id="input-method">
            <option value="money">Dinheiro</option>
            <option value="debit">Cartão de débito</option>
            <option value="credit">Cartão de crédito</option>
          </select>
        </label>
        <label htmlFor="input-tag">
          Tag
          <select name="tag" id="input-tag">
            <option value="laze">Lazer</option>
            <option value="food">Alimentação</option>
            <option value="work">Trabalho</option>
            <option value="transport">Transporte</option>
            <option value="health">Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

export default Forms;
