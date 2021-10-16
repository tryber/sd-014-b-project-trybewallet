import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PaymentMethodInput extends Component {
  render() {
    const { value, handleChange } = this.props;

    return (
      <label htmlFor="paymentMethod">
        Método de pagamento:
        <select
          name="paymentMethod"
          id="paymentMethod"
          value={ value }
          onChange={ (event) => handleChange(event) }
        >
          <option value="cash">Dinheiro</option>
          <option value="creditCard">Cartão de crédito</option>
          <option value="debitCard">Cartão de débito</option>
        </select>
      </label>
    );
  }
}

PaymentMethodInput.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default PaymentMethodInput;
