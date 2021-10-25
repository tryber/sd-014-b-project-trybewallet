import React from 'react';
import Header from '../components/header';
import Form from '../components/form';
import ExpensesTable from '../components/expensesTable';

class Wallet extends React.Component {
  render() {
    return (
      <main>
        <Header />
        <Form />
        <ExpensesTable />
      </main>
    );
  }
}

export default Wallet;
