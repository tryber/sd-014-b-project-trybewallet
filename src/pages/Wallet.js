import React from 'react';
import Header from '../components/Header';
import SelectMoedas from '../components/SelectMoedas';

class Wallet extends React.Component {
  render() {
    return (
      <main>
        <Header />
        <form>
          <label htmlFor="valor">
            Valor
            <input id="valor" type="text" />
          </label>
          <label htmlFor="descricao">
            Descrição
            <input id="descricao" type="text" />
          </label>
          <label htmlFor="metodoDePagamento">
            Método de pagamento
            <select id="metodoDePagamento">
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
          </label>
          <SelectMoedas />
          <label htmlFor="categoria">
            Tag
            <select id="categoria">
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
          </label>
        </form>
        <button type="button">
          Adicionar despesa
        </button>
      </main>
    );
  }
}

export default Wallet;
