import React from 'react';
import Header from '../components/Header';
import Forms from '../components/ExpensesForm';

class Wallet extends React.Component {
  render() {
    return (
      <main>
        <Header />
        <Forms />
      </main>
    );
  }
}

export default Wallet;
