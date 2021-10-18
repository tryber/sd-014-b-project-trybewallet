import React from 'react';

class PaymentMethod extends React.Component {
  render() {
    return (
      <label htmlFor="paymentMethod">
        Método de Pagamento
        <select id="paymentMethod">
          <option>Dinheiro</option>
          <option>Cartão de Crédito</option>
          <option>Cartão de Débito</option>
        </select>
      </label>
    );
  }
}

export default PaymentMethod;
