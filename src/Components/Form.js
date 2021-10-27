import React from 'react';

class Form extends React.Component {
  render() {
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
          <select id="moeda">
            <option value="">Moeda</option>
          </select>
        </label>
        <label htmlFor="método de pagamento">
          Método de pagamento:
          <select id="método de pagamento">
            <option value="dinheiro"> Dinheiro </option>
            <option value="credito"> Cartão de crédito </option>
            <option value="debito"> Cartão de débito </option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag:
          <select id="tag">
            <option value="dinheiro"> Alimentação </option>
            <option value="credito"> Lazer </option>
            <option value="debito"> Trabalho </option>
            <option value="debito"> Transporte </option>
            <option value="debito"> Saúde </option>
          </select>
        </label>
      </form>
    );
  }
}

export default Form;
