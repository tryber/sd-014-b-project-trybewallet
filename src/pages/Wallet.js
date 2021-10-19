import React from 'react';
import FormCost from '../components/FormCost';
import Header from '../components/Header';
import HeaderTableOfCost from '../components/HeaderTableOfCosts';
import TableCosts from '../components/TableCosts';

class Wallet extends React.Component {
  render() {
    return (
      <main>
        <Header />
        <FormCost />
        <HeaderTableOfCost />
        <TableCosts />
      </main>
    );
  }
}

export default Wallet;
