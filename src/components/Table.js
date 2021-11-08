import React from 'react';
import TableLine from './TableLine';

const Table = () => (
  <table>
    <tbody>
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
      <TableLine />
    </tbody>
  </table>
);

export default Table;
