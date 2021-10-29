import React from 'react';

import Header from '../Components/Header';
import AddExpense from '../Components/AddExpense';
import TableExpenses from '../Components/TableExpenses';

class Wallet extends React.Component {
  render() {
    return (
      <main>
        <Header />
        <AddExpense />
        <TableExpenses />
      </main>
    );
  }
}

export default Wallet;
