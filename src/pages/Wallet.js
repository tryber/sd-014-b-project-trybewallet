import React from 'react';
import Header from '../components/Header';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <form>
          <label htmlFor="Valor">
            Valor da despesa
            <input
              type="text"
              id="Valor"
            />
          </label>
          <label htmlFor="Descrição">
            Descrição da despesa
            <textarea
              id="Descrição"
              placeholder="descrição"
            />
          </label>
          <label htmlFor="Moeda">
            Moeda utilizada
            <select id="Moeda">
              <option value="Vazio">Vazio</option>
            </select>
          </label>
          <label htmlFor="Método de pagamento">
            Método de pagamento
            <select id="Método de pagamento">
              <option value="Dinheiro">Dinheiro</option>
              <option value="Credito">Cartão de crédito</option>
              <option value="Debito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="Tag">
            Tipo de despesa
            <select id="Tag">
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
          </label>

        </form>
      </div>
    );
  }
}

export default Wallet;
