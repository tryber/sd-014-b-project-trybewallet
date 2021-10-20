import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

export default function Header() {
  const [localState, setState] = useState(0);
  const email = useSelector((state) => state.user.email);
  const expenses = useSelector((state) => state.wallet.expenses);

  useEffect(() => {
    const ask = 'ask';
    const mapExpenses = expenses.map((expense) => ({
      value: parseInt((expense.value), 10),
      rate: parseFloat(expense.exchangeRates[expense.currency][ask]),
    }))
      .map((expense) => (expense.value * expense.rate))
      .reduce((acc, curr) => (acc + curr), 0);

    setState(parseFloat(mapExpenses.toFixed(2)));
  }, [expenses]);

  return (
    <header>
      <h3 data-testid="email-field">
        Email:
        <span> </span>
        { email }
      </h3>
      <h3>
        Despesa total: R$
        <span data-testid="total-field">
          { localState }
        </span>
      </h3>
      <h3 data-testid="header-currency-field">BRL</h3>
    </header>
  );
}
