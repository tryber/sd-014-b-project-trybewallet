import React, { Component } from 'react';
import { connect } from 'react-redux';

class Table extends Component {
  render() {
    const tableHeader = [
      'Descrição',
      'Tag',
      'Método de Pagamento',
      'Valor',
      'Moeda',
      'Câmbio utilizado',
      'Valor convertido',
      'Moeda de conversão',
      'Editar/Excluir',
    ];
    // const { expenses } = this.props;
    // console.log(expenses);
    return (
      <table>
        <thead>
          <tr>
            {tableHeader.map((header, index) => (<th key={ index }>{header}</th>))}
          </tr>
        </thead>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Table);

// <table> é o elemento pai de toda a tabela
// <thead> é o elemento pai do cabeçalho
// cada <tr> é uma linha
// cada <th> é um célula de cabeçalho
// <tbody> é o elemento pai de todas as outras linhas de conteúdo da tabela
// <td> é um célula individual simples
