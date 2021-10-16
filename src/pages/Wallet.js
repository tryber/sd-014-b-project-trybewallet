import React from 'react';
import AddExpense from '../components/AddExpense';
import Header from '../components/Header';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <AddExpense />
      </div>
    );
  }
}

export default Wallet;
