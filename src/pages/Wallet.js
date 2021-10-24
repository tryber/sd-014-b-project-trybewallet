import React from 'react';
import ExpensesForm from '../components/ExpensesForm';
import Header from '../components/Header';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <main>
          <ExpensesForm />
        </main>
      </div>
    );
  }
}

export default Wallet;
