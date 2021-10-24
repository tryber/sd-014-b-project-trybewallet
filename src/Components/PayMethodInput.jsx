import PropTypes from 'prop-types';
import React, { Component } from 'react';

class PayMethodInput extends Component {
  render() {
    const { method, handleChange } = this.props;
    return (
      <label htmlFor="pay-method-input">
        Método de pagamento
        <select
          id="pay-method-input"
          name="method"
          onChange={ (event) => handleChange(event) }
          value={ method }
        >
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
      </label>
    );
  }
}

PayMethodInput.propTypes = {
  handleChange: PropTypes.func,
  method: PropTypes.string,
}.isRequired;

export default PayMethodInput;
