import React from 'react';
import ExpensesList from '../components/ExpensesList';
import Form from '../components/Form';
import Header from '../components/Header';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Form />
        <ExpensesList />
      </div>
    );
  }
}

export default Wallet;
