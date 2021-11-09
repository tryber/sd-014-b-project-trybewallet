import React from 'react';
import FormExpenses from '../components/FormExpenses';
import Header from '../components/Header';
import TableExpense from '../components/TableExpense';

function Wallet() {
  return (
    <section>
      <Header />
      <FormExpenses />
      <TableExpense />
    </section>
  );
}

export default Wallet;
