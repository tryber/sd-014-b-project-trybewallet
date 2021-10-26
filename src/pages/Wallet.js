import React from 'react';
import Header from '../components/Header';
import ExpensesForm from '../components/ExpensesForm';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <ExpensesForm />
      </div>
    );
  }
}

export default Wallet;
