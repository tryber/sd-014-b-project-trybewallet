import React from 'react';
import FormExpense from '../components/FormExpense';
import Header from '../components/Header';
import TableExpense from '../components/TableExpense';

export default function Wallet() {
  return (
    <section>
      <Header />
      <FormExpense />
      <TableExpense />
    </section>
  );
}
