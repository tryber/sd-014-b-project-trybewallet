import React from 'react';

import Header from '../Components/Header';
import AddExpense from '../Components/AddExpense';

class Wallet extends React.Component {
  render() {
    return (
      <main>
        <Header />
        <AddExpense />
      </main>
    );
  }
}

export default Wallet;
