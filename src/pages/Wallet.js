import React from 'react';
import ControlOfExpenses from '../components/ControlOfExpenses';
import Header from '../components/Header';
import TableExpense from '../components/TableExpense';

export default function Wallet() {
  return (
    <section>
      <Header />
      <ControlOfExpenses />
      <TableExpense />
    </section>
  );
}
