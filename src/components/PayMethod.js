import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PayMethod extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="payment">
        Método de pagamento:
        <select
          value={ value }
          onChange={ (event) => handleChange(event) }
          id="payment"
          name="method"
        >
          <option>
            Dinheiro
          </option>
          <option>
            Cartão de crédito
          </option>
          <option>
            Cartão de débito
          </option>
        </select>
      </label>
    );
  }
}

PayMethod.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default PayMethod;
