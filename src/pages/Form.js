import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <>
        <div />
        <label htmlFor="valor">
          Valor:
          <input id="valor" type="text" />
        </label>
        <label htmlFor="descricao">
          Descrição
          <input id="descricao" type="text" />
        </label>
        <label htmlFor="moeda">
          Moeda
          <select id="moeda">Moeda</select>
        </label>
        <label htmlFor="pagamento">
          Método de pagamento
          <select id="pagamento">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select id="tag">
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
      </>
    );
  }
}

export default Form;
