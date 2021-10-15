import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import ButtonDelete from './ButtonDelete';

const tableHeader = ['Descrição',
  'Tag',
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
              <ButtonDelete id={ expense.id } />
            </tr>
          );
        })}
      </tbody>
      <tfoot />
    </table>
  );
}

TableExpense.propTypes = {
  expenses: PropTypes.shape({
    map: PropTypes.func,
  }).isRequired,
};

const mapStateToProps = (state) => ({ expenses: state.wallet.expenses });

export default connect(mapStateToProps, null)(TableExpense);
