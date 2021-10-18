import React from 'react';
import Header from '../components/Header';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <Header />
        <form>
          <label htmlFor="valor">
            Valor:
            <input id="valor" type="text" />
          </label>
          <label htmlFor="descricao">
            Descrição:
            <input id="descricao" type="text" />
          </label>
          <label htmlFor="moeda">
            Moeda:
            <select id="moeda">
              <option>Vazio</option>
            </select>
          </label>
          <label htmlFor="pagamento">
            Método de pagamento:
            <select id="pagamento">
              <option id="pagamento">Dinheiro</option>
              <option id="pagamento">Cartão de crédito</option>
              <option id="pagamento">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag:
            <select id="tag">
              <option id="tag">Alimentação</option>
              <option id="tag">Lazer</option>
              <option id="tag">Trabalho</option>
              <option id="tag">Transporte</option>
              <option id="tag">Saúde</option>
            </select>
          </label>
        </form>
      </>
    );
  }
}

export default Wallet;
