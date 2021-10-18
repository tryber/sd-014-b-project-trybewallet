import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="valor">
          Valor:
          <input type="text" id="valor" />
        </label>
        <label htmlFor="descricao">
          Descrição:
          <input type="text" id="descricao" />
        </label>
        <label htmlFor="moeda">
          Moeda:
          <select id="moeda">
            <option value="laranja">Laranja</option>
            <option selected value="coco">Coco</option>
          </select>
        </label>
        <label htmlFor="metodo">
          Método de pagamento:
          <select id="metodo">
            <option selected value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag:
          <select id="tag">
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

export default Form;
