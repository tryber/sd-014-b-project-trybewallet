import React from 'react';
import Header from '../components/Header';
import AddExpense from '../components/AddExpense';
import ExpensesTable from '../components/ExpensesTable';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <Header />
        <AddExpense />
        <ExpensesTable />
      </>
    );
  }
}

export default Wallet;
