import React from 'react';
import ExpensesForm from '../components/expensesForm';
import Header from '../components/header';
import ExpensesTable from '../components/expensesTable';

class Wallet extends React.Component {
  render() {
    return (
      <section>
        <Header />
        <ExpensesForm />
        <ExpensesTable />
      </section>
    );
  }
}

export default Wallet;
