import React from 'react';
import FormCost from '../components/FormCost';
import Header from '../components/Header';

class Wallet extends React.Component {
  render() {
    return (
      <main>
        <Header />
        <FormCost />
      </main>
    );
  }
}

export default Wallet;
