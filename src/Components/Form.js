import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="valor">
          Valor:
          <input type="number" name="valor" />
        </label>
        <label htmlFor="descricao">
          Descrição:
          <input type="text" name="descricao" />
        </label>
        <label htmlFor="moeda">
          Moeda:
          <select name="moeda">
            {/* <option value="">Laranja</option> */}
          </select>
        </label>
        <label htmlFor="pagamento">
          Método de pagamento:
          <select name="pagamento">
            <option value="dinheiro"> Dinheiro </option>
            <option value="credito"> Cartão de crédito </option>
            <option value="debito"> Cartão de débito </option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag:
          <select name="tag" id="tag">
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
