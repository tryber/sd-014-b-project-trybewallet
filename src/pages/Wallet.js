import React from 'react';
import AddExpense from '../components/AddExpense';
import ExpensesTable from '../components/ExpensesTable';
import Header from '../components/Header';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <AddExpense />
        <ExpensesTable />
      </div>
    );
  }
}

export default Wallet;
