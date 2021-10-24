import React from 'react';
import ExpenseForm from '../Components/ExpenseForm';
import Header from '../Components/Header';

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
