import PropTypes from 'prop-types';
import React, { Component } from 'react';

class PaymentSelect extends Component {
  render() {
    const { method, handleChange } = this.props;
    return (
      <label htmlFor="method">
        Método de pagamento
        <select id="method" value={ method } onChange={ (e) => handleChange(e) }>
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de cŕedito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
      </label>
    );
  }
}

PaymentSelect.propTypes = {
  method: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default PaymentSelect;
