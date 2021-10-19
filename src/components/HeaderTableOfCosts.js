import React from 'react';
import { connect } from 'react-redux';

class HeaderTableOfCost extends React.Component {
  render() {
    return (
      <table className="header-table-costs">
        <tr>
          <th className="th-table">Descrição</th>
          <th className="th-table">Tag</th>
          <th className="th-table">Método de pagamento</th>
          <th className="th-table">Valor</th>
          <th className="th-table">Moeda</th>
          <th className="th-table">Câmbio utilizado</th>
          <th className="th-table">Valor convertido</th>
          <th className="th-table">Moeda de conversão</th>
          <th className="th-table">Editar/Excluir</th>
        </tr>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  listOfExpenses: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(HeaderTableOfCost);
