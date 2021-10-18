import React from 'react';
import { connect } from 'react-redux';

import TableRows from './TableRows';

class Table extends React.Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th colSpan="0" id="description">Descrição</th>
            <th colSpan="1" id="tag">Tag</th>
            <th colSpan="2" id="method">Método de pagamento</th>
            <th colSpan="3" id="value">Valor</th>
            <th colSpan="4" id="currency">Moeda</th>
            <th colSpan="5" id="rate">Câmbio utilizado</th>
            <th colSpan="6" id="conversion">Valor convertido</th>
            <th colSpan="7" id="home-currency">Moeda de conversão</th>
            <th colSpan="8" id="edit">Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          { expenses.map((expense) => (
            <TableRows key={ id } expense={ expense } />
          )) }
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Table);

Table.propTypes = {

};

Table.defaultProps = {

};
