import React from 'react';
import Expenditures from '../components/Expenditures';
import Header from '../components/Header';

class Wallet extends React.Component {
  render() {
    return (
      <main>
        <Header />
        <Expenditures />
      </main>
    );
  }
}

export default Wallet;
