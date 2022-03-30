import React, { Component } from 'react';
import { connect } from 'react-redux';

class TableHead extends Component {
  render() {
    return (
      <table className="table-head-wallet">
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
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expensesInfo: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(TableHead);
