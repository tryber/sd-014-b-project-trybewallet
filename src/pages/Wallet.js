import React from 'react';
import ExpenseForm from '../components/ExpenseForm';
import ExpenseTable from '../components/ExpenseTable';
import Header from '../components/Header';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Header />
        </div>
        <ExpenseForm />
        <ExpenseTable />
      </div>
    );
  }
}

export default Wallet;
