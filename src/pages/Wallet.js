import React from 'react';
import Header from '../Components/Header';

class Wallet extends React.Component {
  render() {
    return (
      <main>
        <Header />
        <form>
          <label htmlFor="valor">
            Valor:
            <input type="number" id="valor" />
          </label>
          <label htmlFor="descricao">
            Descrição:
            <input type="text" id="descricao" />
          </label>
          <label htmlFor="moeda">
            Moeda:
            <select id="moeda">$</select>
          </label>
          <label htmlFor="pagamento">
            Modo de pagamento:
            <select id="pagamento">
              <option>Dinheiro</option>
              <option>Cartão de crédto</option>
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
          <button type="button">Adicionar dispesa</button>
        </form>
      </main>
    );
  }
}

export default Wallet;
