import React from 'react';

function PaymentMethodLabel() {
  return (
    <label htmlFor="paymentMethod">
      <select id="paymentMethod">
        <option value="dinheiro">Dinheiro</option>
        <option value="debitCard">Cartão de débito</option>
        <option value="creditCard">Cartão de crédito</option>
      </select>
      Método de pagamento
    </label>
  );
}

export default PaymentMethodLabel;
