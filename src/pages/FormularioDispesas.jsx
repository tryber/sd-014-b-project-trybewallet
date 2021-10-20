import React, { Component } from 'react';

export class FormularioDispesas extends Component {
  render() {
    return (
      <form>
        <label htmlFor="Value">
          Valor:
          <input type="text" name="name" />
        </label>
        <label htmlFor="description">
          Descrição:
          <input type="text" name="name" />
        </label>
        <label htmlFor="moeda">
          moeda:
          <select name="moeda" id="moeda">
            <option value="moeda">moeda</option>
          </select>
        </label>
        <label htmlFor="metod">
          <select name="metod" id="metod">
            <option value="cash">Dinheiro</option>
            <option value="creditCard">Cartão de crédito</option>
            <option value="debitCard">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag:
          <select name="tag" id="tag">
            <option value="food">Alimentação</option>
            <option value="fun">Lazer</option>
            <option value="job">Trabalho</option>
            <option value="transport">Transporte</option>
            <option value="health">Saude</option>
          </select>
        </label>

      </form>
    );
  }
}

export default FormularioDispesas;
