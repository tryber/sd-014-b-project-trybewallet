import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PaymentOption extends Component {
  render() {
    const { value, handleChange } = this.props;

    return (
      <label htmlFor="paymentOption">
        Método de pagamento:
        <select
          name="paymentOption"
          id="paymentOption"
          value={ value }
          onChange={ (event) => handleChange(event) }
        >
          <option value="moneyOption">Dinheiro</option>
          <option value="creditOption">Cartão de crédito</option>
          <option value="debitOption">Cartão de débito</option>
        </select>
      </label>
    );
  }
}

PaymentOption.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default PaymentOption;
