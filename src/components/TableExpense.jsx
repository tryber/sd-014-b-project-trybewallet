import React from 'react';
import { connect } from 'react-redux';
import DeleteBtn from './DeleteBtn';
import ButtonAddExpense from './ButtonAddExpense';

const tableHeader = [
  'Descrição', 'Tag',
  'Método de pagamento',
  'Valor', 'Moeda',
  'Câmbio utilizado',
  'Valor convertido',
  'Moeda de conversão',
  'Editar/Excluir',
];

function TableExpense({ expenses }) {
  return (
    <table border="1">
      <thead>
        <tr>
          {tableHeader.map((item) => <th key={ item }>{item}</th>)}
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
              <DeleteBtn id={ expense.id } />
              <ButtonAddExpense id={ expense.id } />
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

const mapStateToProps = (state) => ({ expenses: state.wallet.expenses });

export default connect(mapStateToProps, null)(TableExpense);
