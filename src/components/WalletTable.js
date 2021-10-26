import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

const tableHeader = ['Descrição',
  'Tag',
  'Método de pagamento',
  'Valor', 'Moeda',
  'Câmbio utilizado',
  'Valor convertido',
  'Moeda de conversão',
  'Editar/Excluir',
];

const handleClick = (id) => {
  console.log(id);
};

class WalletTable extends Component {
  render() {
    const { expensesFromGlobalState } = this.props;
    return ( // adaptado do site https://edrodrigues.com.br/blog/criando-tabelas-com-filtros-%E2%80%8B%E2%80%8Busando-react/
      <table border="1">
        { /* https://web.fe.up.pt/~goii2000/M7/T2_tabela.htm */ }
        <thead>
          <tr>
            {tableHeader.map((description, i) => <th key={ i }>{description}</th>)}
          </tr>
        </thead>
        <tbody>
          {expensesFromGlobalState.map((expense, index) => {
            const currentCurrency = expense.exchangeRates[expense.currency];
            const ask = Number(currentCurrency.ask);
            return (
              <tr key={ index }>
                <td>{expense.description}</td>
                <td>{expense.tag}</td>
                <td>{expense.method}</td>
                <td>{expense.value}</td>
                <td>{currentCurrency.name.split('/')[0]}</td>
                <td>{ask.toFixed(2)}</td>
                <td>{(expense.value * ask).toFixed(2)}</td>
                <td>Real</td>
                <td>
                  <button type="button" onClick={ () => handleClick(expense.id) }>
                    Excluir
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

WalletTable.propTypes = {
  expensesFromGlobalState: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => (
  {
    expensesFromGlobalState: state.wallet.expenses,
  }
);

export default connect(mapStateToProps)(WalletTable);
