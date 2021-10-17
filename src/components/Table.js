import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Table extends Component {
  render() {
    return (
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
        <tbody>
          <tr>
            <td>padaria</td>
            <td>Alimentação</td>
            <td>Cartão de Crédito</td>
            <td>100.00</td>
            <td>Euro</td>
            <td>6.50</td>
            <td>650.00</td>
            <td>Real</td>
            <td><button type="button">EDIT</button></td>
          </tr>
        </tbody>

      </table>
    );
  }
}

const mapStateToProps = () => ({

});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
