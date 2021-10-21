import React from 'react';
import FormCost from '../components/FormCost';
import Header from '../components/Header';
import HeaderTableOfCost from '../components/HeaderTableOfCosts';

class Wallet extends React.Component {
  render() {
    return (
      <main>
        <Header />
        <FormCost />
        <HeaderTableOfCost />
      </main>
    );
  }
}

export default Wallet;
