import React from 'react';
import Header from '../components/Header';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <form>
          <label htmlFor="valor">
            Valor
            <input
              type="text"
              id="valor"
              name="valor"
            />
          </label>
          <label htmlFor="descrição">
            Descrição
            <input
              type="text"
              id="descrição"
              name="descrição"
            />
          </label>
          <label htmlFor="moeda">
            Moeda
            <select id="moeda" name="moeda">
              {}
            </select>
          </label>
          <label htmlFor="pagamento">
            Método de pagamento
            <select id="pagamento" name="pagamento">
              <option value="Dinheiro">Dinheiro</option>
              <option value="Credito">Cartão de crédito</option>
              <option value="Debito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag
            <select id="tag" name="tag">
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
