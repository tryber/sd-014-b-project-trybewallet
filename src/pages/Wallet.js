import React from 'react';
import Header from '../components/Header';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <form>
          <label htmlFor="addValue">
            Valor:
            <input type="text" id="addValue" />
          </label>
          <label htmlFor="description">
            Descrição
            <textarea id="description" cols="30" rows="10" />
          </label>
          <label htmlFor="expense-currency">
            Moeda
            <select id="expense-currency">
              <option value="">BRL</option>
            </select>
          </label>
          <label htmlFor="payment">
            Método de pagamento
            <select id="payment">
              <option value="dinheiro" id="dinheiro">Dinheiro</option>
              <option value="credito" id="credito">Cartão de crédito</option>
              <option value="debito">Cartão de débito</option>
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
        </form>
      </div>
    );
  }
}

export default Wallet;
