import React, { Component } from 'react';
import Label from '../helpers/LabelWithInput';

export default class Expenditures extends Component {
  render() {
    return (
      <form>
        <Label name="valor" />
        <Label name="descrição" />
        <label htmlFor="moeda">
          Moeda:
          <select id="moeda">
            <option>BRL</option>
          </select>
        </label>
        <label htmlFor="metodo de pagamento">
          Método de pagamento:
          <select id="metodo de pagamento">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag:
          <select id="tag">
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
