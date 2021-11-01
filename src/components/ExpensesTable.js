import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { sendUserInfo } from '../actions/index';

class ExpensesTable extends React.Component {
  render() {
    const { expenses } = this.props;
    const tableTitles = ['Descrição', 'Tag', 'Método de pagamento',
      'Valor', 'Moeda', 'Câmbio utilizado', 'Valor convertido',
      'Moeda de conversão', 'Editar/Excluir',
    ];
    return (
      <table>
        <thead>
          <tr>
            {tableTitles.map((item) => <th key={ item }>{ item }</th>)}
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense, index) => {
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
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

ExpensesTable.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(ExpensesTable);

// Referência para a construção da tabela: https://github.com/tryber/sd-014-b-project-trybewallet/pull/1
