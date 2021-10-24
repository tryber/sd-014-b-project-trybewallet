import React from 'react';
import ExpensesForm from '../components/expensesForm';
import Header from '../components/header';

class Wallet extends React.Component {
  render() {
    return (
      <section>
        <Header />
        <ExpensesForm />
      </section>
    );
  }
}

export default Wallet;
