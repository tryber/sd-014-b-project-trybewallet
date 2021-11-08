import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import EditButton from './EditButton';
import DeleteButton from './DeleteButton';

function ExpenseTable({ expenses }) {
  const tableHeader = [
    'Descrição',
    'Tag',
    'Método de pagamento',
    'Valor',
    'Moeda',
    'Câmbio utilizado',
    'Valor convertido',
    'Moeda de conversão',
    'Editar/Excluir',
  ];
  return (
    <table>
      <thead>
        <tr>
          {tableHeader.map((item) => (
            <th key={ item }>{item}</th>
          ))}
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
              <EditButton id={ expense.id } />
              <DeleteButton id={ expense.id } />
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

const mapStateToProps = ({ wallet: { expenses } }) => ({
  expenses,
});

ExpenseTable.propTypes = {
  expenses: PropTypes.arrayOf(Object).isRequired,
};

export default connect(mapStateToProps, null)(ExpenseTable);
