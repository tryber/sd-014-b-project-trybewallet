import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="value">
          Valor:
          <input type="text" placeholder="0,00" id="value" />
        </label>
        <label htmlFor="description">
          Descrição:
          <input type="text" placeholder="água, luz, carro" id="description" />
        </label>
        <label htmlFor="coin">
          Moeda:
          <select id="coin">
            <option> </option>
          </select>
        </label>
        <label htmlFor="methodPayment">
          Método de pagamento:
          <select id="methodPayment">
            <option value="cash">Dinheiro</option>
            <option value="credit">Cartão de crédito</option>
            <option value="debit">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag:
          <select id="tag">
            <option value="food">Alimentação</option>
            <option value="fun">Lazer</option>
            <option value="job">Trabalho</option>
            <option value="travel">Transporte</option>
            <option value="health">Saúde</option>
          </select>
        </label>
        <button type="button">
          Adicionar despesa
        </button>
      </form>
    );
  }
}

export default Form;
