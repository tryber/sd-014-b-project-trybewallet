import React from 'react';
import Header from '../pageWalletComponents/Header';
import InsertForm from '../test/InsertForm';

class Wallet extends React.Component {
  render() {
    return (
      <main>
        <Header />
        <h1>Wallet</h1>
        <InsertForm />
      </main>
    );
  }
}

export default Wallet;
