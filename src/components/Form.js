import React, { Component } from 'react';
import { pagamento, tag } from '../data';

class Form extends Component {
  render() {
    return (
      <form>
        <label htmlFor="valor">
          Valor
          <input id="valor" name="valor" />
        </label>
        <label htmlFor="desc">
          Descrição
          <input id="desc" name="desc" />
        </label>
        <label htmlFor="moeda">
          Moeda
          <select id="moeda" name="moeda">
            <option> </option>
          </select>
        </label>
        <label htmlFor="pagamento">
          Método de pagamento
          <select id="pagamento" name="pagemento">
            { pagamento.map((metodo, index) => (
              <option key={ index } value={ metodo }>{metodo}</option>
            )) }
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select id="tag" name="tag">
            {tag.map((value, index) => (
              <option key={ index } value={ value }>{value}</option>
            ))}
          </select>
        </label>
      </form>
    );
  }
}

export default Form;
