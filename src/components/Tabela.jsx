import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Tabela.css';

class Tabela extends Component {
  render() {
    const { toTable } = this.props;

    return (
      <header className="theBorder">
        <table>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Tag</th>
              <th>Método de pagamento</th>
              <th>Valor</th>
              <th>Moeda</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Moeda de conversão</th>
              <th>Editar/Excluir</th>
            </tr>
          </thead>
          { toTable() }
        </table>
      </header>
    );
  }
}

Tabela.propTypes = {
  toTable: PropTypes.func.isRequired,
};

export default Tabela;
