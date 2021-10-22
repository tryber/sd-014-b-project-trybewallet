import React, { Component } from 'react';

class PayMethodInput extends Component {
  render() {
    return (
      <label htmlFor="paymethod">
        Método de pagamento
        <select name="paymethod">
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartao-de-credito">Cartão de crédito</option>
          <option value="Cartao-de-debito">Cartão de débito</option>
        </select>
      </label>
    );
  }
}

export default PayMethodInput;
