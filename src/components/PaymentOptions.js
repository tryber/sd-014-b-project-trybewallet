import PropTypes from 'prop-types';
import React from 'react';

class PaymentOptions extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="payment-method">
        Método de pagamento
        <select
          id="payment-method"
          name="method"
          value={ value }
          onChange={ handleChange }
        >
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
      </label>
    );
  }
}

PaymentOptions.propTypes = {
  handleChange: PropTypes.func,
  value: PropTypes.string,
}.isRequired;

export default PaymentOptions;
