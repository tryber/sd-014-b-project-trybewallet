import React from 'react';
import Header from '../components/Header';

class Wallet extends React.Component {
  render() {
    const form = (
      <form>
        <label htmlFor="value">
          Valor
          <input type="number" name="value" id="value" />
        </label>
        <label htmlFor="description">
          Descrição
          <input type="text" name="description" id="description" />
        </label>
        <label htmlFor="currency">
          Moeda
          <select name="currency" id="currency">
            <option value="BRL">BRL</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
          </select>
        </label>
        <label htmlFor="method">
          Método de pagamento
          <select name="method" id="method">
            <option value="dinheiro">Dinheiro</option>
            <option value="cartao-credito">Cartão de crédito</option>
            <option value="cartao-debito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select name="tag" id="tag">
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
      </form>
    );

    return (
      <>
        <Header />
        { form }
      </>
    );
  }
}

export default Wallet;
