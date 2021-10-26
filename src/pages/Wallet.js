import React from 'react';
import ExpensesForm from '../components/ExpensesForm';
import Header from '../components/Header';

class Wallet extends React.Component {
  render() {
    return (
      <main>
        <Header />
        <br />
        <ExpensesForm />
      </main>
    );
  }
}

export default Wallet;
