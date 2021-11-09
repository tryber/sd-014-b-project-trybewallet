import React, { Component } from 'react';

class FormWallet extends Component {
  render() {
    const tags = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    const payOptions = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    return (
      <form>
        <label htmlFor="valor">
          Valor:
          <input type="text" id="valor" />
        </label>
        <label htmlFor="descrição">
          Descrição:
          <input type="text" id="descrição" />
        </label>
        <label htmlFor="moeda">
          Moeda:
          <select id="moeda">Moeda</select>
        </label>
        <label htmlFor="metodo de pagamento">
          Método de pagamento:
          <select id="metodo de pagamento">
            {payOptions.map((value) => (
              <option
                key={ value }
                value={ value }
              >
                { value }
              </option>))}
          </select>
        </label>
        <label htmlFor="categoria">
          Tag:
          <select id="categoria">
            {tags.map((tag) => (
              <option
                key={ tag }
                value={ tag }
              >
                { tag }
              </option>))}
          </select>
        </label>
      </form>
    );
  }
}

export default FormWallet;
