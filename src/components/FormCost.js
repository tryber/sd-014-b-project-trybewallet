import React from 'react';
import '../pages/WalletPage.css';

class FormCost extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="cost-value">
          Valor:
          <input type="number" id="cost-value" />
        </label>
        <label htmlFor="currency">
          Moeda:
          <select id="currency">
            ..
          </select>
        </label>
        <label htmlFor="payment">
          Método de pagamento:
          <select id="payment">
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
        <label htmlFor="description">
          Descrição:
          <input type="text" id="description" />
        </label>
      </form>
    );
  }
}

export default FormCost;
