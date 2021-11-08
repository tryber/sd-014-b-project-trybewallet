import React from 'react';

import Header from '../components/Header';
import Form from '../components/Form';
import ExpenseTable from '../components/ExpenseTable';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Form />
        <ExpenseTable />
      </>);
  }
}

export default Wallet;
