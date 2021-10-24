import React, { Component } from 'react';

class PayMethodInput extends Component {
  render() {
    return (
      <label htmlFor="payMethod">
        Método de pagamento
        <select id="payMethod" name="pay-method-input">
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
      </label>
    );
  }
}

export default PayMethodInput;
