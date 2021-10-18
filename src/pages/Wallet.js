import React from 'react';
import Header from '../components/Header';
import Input from '../components/Input';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <form>
          <Input label="Valor" type="number" name="addValue" />
          <label htmlFor="description">
            Descrição
            <textarea name="description" id="description" cols="30" rows="10" />
          </label>
          <label htmlFor="expense-currency">
            Moeda
            <select name="expense-currency">
              <option value="">BRL</option>
            </select>
          </label>
          <label htmlFor="payment">
            Método de pagamento
            <select name="payment">
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="payment">
            Tag
            <select name="payment">
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
          </label>
        </form>
      </div>);
  }
}

export default Wallet;
