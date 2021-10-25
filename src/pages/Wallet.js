import React from 'react';
import Expenses from '../components/Expenses';
import Header from '../components/Header';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Expenses />
      </>
    );
  }
}

export default Wallet;
