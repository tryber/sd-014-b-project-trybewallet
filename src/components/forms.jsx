import React from 'react';

class Forms extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="valor">
          Valor:
          <input id="valor" type="text" name="name" />
        </label>
        <label htmlFor="Descrição">
          Descrição:
          <input id="Descrição" type="text" name="name" />
        </label>
        <label htmlFor="Moeda">
          Moeda:
          <select id="Moeda">Moeda</select>
        </label>
        <label htmlFor="payment">
          Método de pagamento:
          <select id="payment">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="despesa">
          Tag:
          <select id="despesa">
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

export default Forms;
