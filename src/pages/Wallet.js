import React from 'react';
import Header from '../components/Header';
import AddExpense from '../components/AddExpense';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <Header />
        <AddExpense />
      </>
    );
  }
}

export default Wallet;
