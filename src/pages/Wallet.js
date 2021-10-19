import React from 'react';
import FormExpense from '../components/FormExpense/FormExpense';
import Header from '../components/Header/Header';
import TableExpense from '../components/TableExpense/TableExpense';

export default function Wallet() {
  return (
    <section>
      <Header />
      <FormExpense />
      <TableExpense />
    </section>
  );
}
