import PropTypes from 'prop-types';
import React, { Component } from 'react';

class PaymentSelect extends Component {
  render() {
    const { method, handleChange } = this.props;
    return (
      <label htmlFor="method">
        método de pagamento
        <select id="method" value={ method } onClick={ (e) => handleChange(e) }>
          <option selected value="Dinheiro">dinheiro</option>
          <option value="Cartão de cŕedito">cartão de crédito</option>
          <option value="Cartão de débito">cartão de débito</option>
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
