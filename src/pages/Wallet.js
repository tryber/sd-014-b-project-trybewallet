import React from 'react';
import Header from '../components/Header';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <form>
          <label htmlFor="Valor">
            Valor
            <input type="text" id="Valor" />
          </label>
          <label htmlFor="Descricao">
            Descrição
            <input type="text" id="Descricao" />
          </label>
          <label htmlFor="Coins">
            Moeda
            <select id="Coins">
              <option>BRL</option>
            </select>
          </label>
          <label htmlFor="payment">
            Método de pagamento
            <select id="payment">
              <option type="combobox">Dinheiro</option>
              <option type="combobox">Cartão de crédito</option>
              <option type="combobox">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tags">
            Tag
            <select id="tags">
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
