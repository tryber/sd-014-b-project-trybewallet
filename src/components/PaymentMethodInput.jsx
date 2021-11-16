import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PaymentMethodInput extends Component {
  render() {
    const { value, handleChange } = this.props;

    return (
      <label htmlFor="paymentMethod">
        Método de pagamento:
        <select
          name="method"
          id="paymentMethod"
          value={ value }
          onChange={ (event) => handleChange(event) }
        >
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
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
