import React from 'react';
import ExpenseForm from './componentsWallet/ExpenseForm';
import ExpenseTable from './componentsWallet/ExpenseTable';
import Header from './componentsWallet/Header';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <Header />
        <ExpenseForm />
        <ExpenseTable />
      </>
    );
  }
}

export default Wallet;
