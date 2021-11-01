import React from 'react';
import PropTypes from 'prop-types';

function PaymentMethodLabel({ method, setMethod }) {
  return (
    <label htmlFor="paymentMethod">
      <select
        onChange={ ({ target }) => setMethod(target.value) }
        value={ method }
        id="paymentMethod"
      >
        <option value="Dinheiro">Dinheiro</option>
        <option value="Cartão de débito">Cartão de débito</option>
        <option value="Cartão de crédito">Cartão de crédito</option>
      </select>
      Método de pagamento
    </label>
  );
}

PaymentMethodLabel.propTypes = {
  method: PropTypes.string.isRequired,
  setMethod: PropTypes.func.isRequired,
};

export default PaymentMethodLabel;
