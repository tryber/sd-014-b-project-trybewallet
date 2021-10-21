import PropTypes from 'prop-types';
import React from 'react';

class SelectPay extends React.Component {
  render() {
    const { value, onChange, name } = this.props;
    return (
      <div>
        <label htmlFor="pay">
          Método de pagamento
          <select id="pay" name={ name } defaultValue={ value } onChange={ onChange }>
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
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
