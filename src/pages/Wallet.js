import React from 'react';
import Header from '../components/Header';
import NewTransactionForm from '../components/NewTransactionForm';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <NewTransactionForm />
      </div>
    );
  }
}

export default Wallet;
