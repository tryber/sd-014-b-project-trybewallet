import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Forms from '../components/Forms';
import TableRow from '../components/TableRow';

function Wallet() {
  const [formVisible, setFormVisible] = useState(false);
  const expenses = useSelector((state) => state.wallet.expenses);
  function handleExpenses() {
    const expense = expenses.reduce((acc, cur) => {
      acc += cur.exchangeRates[cur.currency].ask * cur.value;
      return acc;
    }, 0);
    return expense;
  }

  const email = useSelector((state) => state.user.email);
  return (
    <div>
      <header style={ { filter: formVisible && 'blur(2px)' } }>
        <h1>Virtual Wallet</h1>
        <span data-testid="email-field">{`Bem vindo(a) ${email}`}</span>
        <div
          data-testid="total-field"
        >
          {`Despesas: ${handleExpenses()}`}
          <span data-testid="header-currency-field">BRL</span>
        </div>
      </header>
      <main className="main">
        {formVisible && <Forms setIsVisible={ () => setFormVisible(false) } />}
        <Button
          style={ { marginBottom: '2rem' } }
          variant="contained"
          color="primary"
          onClick={ () => setFormVisible(true) }
        >
          Adicionar uma despesa
        </Button>
        <TableRow />
      </main>
    </div>
  );
}

export default Wallet;
