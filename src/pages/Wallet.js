import React from 'react';
import { useSelector } from 'react-redux';
import Forms from '../components/Forms';
import TableRow from '../components/TableRow';

function Wallet() {
  const expenses = useSelector((state) => state.wallet.expenses);
  function handleExpenses() {
    const expense = expenses.reduce((acc, cur) => {
      acc += cur.exchangeRates[cur.currency].ask * cur.value;
      return acc;
    }, 0);
    return expense;
  }

  console.log(expenses);

  const email = useSelector((state) => state.user.email);
  return (
    <div>
      <header>
        <h1>TrybeWallet</h1>
        <span data-testid="email-field">{`Bem vindo(a) ${email}`}</span>
        <div
          data-testid="total-field"
        >
          {`Despesas: ${handleExpenses()}`}
          <span data-testid="header-currency-field">BRL</span>
        </div>
      </header>
      <Forms />
      <TableRow />
    </div>
  );
}

export default Wallet;
