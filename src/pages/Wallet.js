import React from 'react';
import Header from '../components/Header';
import Select from '../components/Select';

class Wallet extends React.Component {
  render() {
    const moedas = ['USD', 'EURO', 'AUD'];
    const payments = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const tag = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    return (
      <>
        <Header />
        <form>
          <label htmlFor="expense">
            Valor:
            <input type="text" name="expense" id="expense" />
          </label>
          <label htmlFor="description">
            Descrição:
            <input type="text" name="description" id="description" />
          </label>
          <Select field="currency" label="Moeda:" array={ moedas } />
          <Select field="payment" label="Método de pagamento:" array={ payments } />
          <Select field="tag" label="Tag:" array={ tag } />
        </form>
      </>
    );
  }
}

export default Wallet;
