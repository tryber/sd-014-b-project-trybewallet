import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Select from './Select';

class MetdPagamento extends Component {
  render() {
    // const { value, onChange } = this.props;
    return (
      <Select
        labelText="Método de pagamento"
        id="metdPagamento"
        htmlFor="metdPagamento"
        arrayOption={ ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'] }
        name="metdPagamento"
      />
    );
  }
}

// MetdPagamento.propTypes = {
//   onChange: PropTypes.func.isRequired,
//   value: PropTypes.string.isRequired,
// };

export default MetdPagamento;
