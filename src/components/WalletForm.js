import React from 'react';

export default class WalletForm extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="value">
          Valor :
          <input type="text" name="value" id="value" />
        </label>

        <label htmlFor="description">
          Descrição :
          <input type="text" name="description" id="description" />
        </label>

        <label htmlFor="coin">
          Moeda :
          <select name="coin" id="coin">
            <option>BRL</option>
          </select>
        </label>

        <label htmlFor="payment">
          Método de pagamento :
          <select name="payment" id="payment">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>

        <label htmlFor="category">
          Tag :
          <select name="category" id="category">
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>

      </form>
    );
  }
}
