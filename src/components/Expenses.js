import React from 'react';

class Expenses extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="valor">
          Valor
          <input type="text" id="valor" />
        </label>
        <label htmlFor="descricao">
          Descrição
          <input type="text" id="descricao" />
        </label>
        <label htmlFor="moeda">
          Moeda
          <select id="moeda">
            <option> Moeda </option>
            {/* consumir API em requisitos futuros */}
          </select>
        </label>
        <label htmlFor="pagamento">
          Método de Pagamento
          <select id="pagamento">
            <option> Dinheiro </option>
            <option> Cartão de Crédito </option>
            <option> Cartão de Débito </option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select id="tag">
            <option> Alimentação </option>
            <option> Lazer </option>
            <option> Trabalho </option>
            <option> Transporte </option>
            <option> Saúde </option>
          </select>
        </label>
      </form>
    );
  }
}

export default Expenses;
