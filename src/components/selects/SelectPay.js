import PropTypes from 'prop-types';
import React from 'react';

class SelectPay extends React.Component {
  render() {
    const { value, onChange, name } = this.props;
    return (
      <div>
        <label htmlFor="pay">
          Método de pagamento
          <select id="pay" name={ name } value={ value } onChange={ onChange }>
            <option value="money">Dinheiro</option>
            <option value="creditCard">Cartão de Crédito</option>
            <option value="debitCard">Cartão de Débito</option>
          </select>
        </label>
      </div>
    );
  }
}

SelectPay.propTypes = {
  name: PropTypes.isRequired,
  onChange: PropTypes.isRequired,
  value: PropTypes.isRequired,
};

export default SelectPay;
