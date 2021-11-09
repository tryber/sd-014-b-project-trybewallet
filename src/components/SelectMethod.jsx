import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SelectMethod extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <section>
        <label htmlFor="pagamento">
          Método de pagamento:
          <select id="pagamento" name="method" value={ value } onChange={ onChange }>
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
      </section>
    );
  }
}

SelectMethod.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;

export default SelectMethod;
