import React from 'react';
import Header from '../components/Header';
import ExpensesForm from '../components/ExpensesForm';

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
