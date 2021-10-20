import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MetdPagamento extends Component {
  render() {
    const arrayOption = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const { onChange } = this.props;
    return (
      <label htmlFor="metdPagamento">
        Método de pagamento
        <select
          name="metdPagamento"
          id="metdPagamento"
          onChange={ onChange }
        >
          { arrayOption.map((item, index) => (
            <option
              key={ index }
              value={ item }
            >
              { item }
            </option>
          ))}
        </select>

      </label>
    );
  }
}

MetdPagamento.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default MetdPagamento;
