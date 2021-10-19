import React from 'react';
import ExpensesForm from '../pageWalletComponents/ExpensesForm';
import Header from '../pageWalletComponents/Header';

class Wallet extends React.Component {
  render() {
    return (
      <main>
        <Header />
        <h1>Wallet</h1>
        <ExpensesForm />
      </main>
    );
  }
}

export default Wallet;
