import React from 'react';
import Form from '../pageWalletComponents/ExpensesForm';
import Header from '../pageWalletComponents/Header';

class Wallet extends React.Component {
  render() {
    return (
      <main>
        <Header />
        <h1>Wallet</h1>
        <Form />
      </main>
    );
  }
}

export default Wallet;
