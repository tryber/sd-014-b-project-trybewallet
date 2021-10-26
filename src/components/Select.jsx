import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class Select extends Component {
  render() {
    return (
      <select>
        <option>Dinheiro</option>
        <option>Cartão de Crédito</option>
        <option>Cartão de débito</option>
      </select>
    );
  }
}

// Select.propTypes = {
//   prop: PropTypes
// }

export default Select;
