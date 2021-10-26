import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class TableExpenses extends Component {
  render() {
    return (
      <table>
        <tbody>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de Pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar / Excluir</th>
          </tr>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de Pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>
              <input type="button" value="Editar" data-testid="delete-btn" />
              <input type="button" value="Excluir" data-testid="edit-btn" />
            </th>
          </tr>
        </tbody>
      </table>
    );
  }
}

// TableExpenses.propTypes = {
//   prop: PropTypes
// };

export default TableExpenses;
