import React from 'react';
import ExpenseForm from '../components/ExpenseForm';
import Header from '../components/Header';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <ExpenseForm />
      </div>
    );
  }
}

export default Wallet;
