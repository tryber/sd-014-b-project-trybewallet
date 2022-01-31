import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '@material-ui/core';
import { deleteExpenses } from '../actions';

function TableRow() {
  const expensesWallet = useSelector((state) => state.wallet.expenses);
  const dispatch = useDispatch();
  return (
    <table>
      <thead>
        <tr>
          <th>Descrição</th>
          <th>Tag</th>
          <th>Método</th>
          <th>Valor</th>
          <th>Moeda</th>
          <th>Cambio</th>
          <th>Valor convertido</th>
          <th>Moeda de conversão</th>
          <th>Excluir</th>
        </tr>
      </thead>
      <tbody>
        {expensesWallet.map((expense) => (
          <tr key={ expense.id }>
            <td>{expense.description}</td>
            <td>{expense.tag}</td>
            <td>{expense.method}</td>
            <td>{`${expense.value} ${expense.currency}`}</td>
            <td>{expense.currency}</td>
            <td>.</td>
            <td>
              {`R$
               ${expense.value * expense.exchangeRates[expense.currency].ask} `}
            </td>
            <td>Real</td>
            <td>
              <Button
                color="secondary"
                variant="outlined"
                onClick={ () => dispatch(deleteExpenses(expense.id)) }
                type="button"
              >
                Excluir
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TableRow;
