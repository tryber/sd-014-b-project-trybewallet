import React from 'react';
import Header from '../components/Header';
import WalletForm from '../components/Form';

class Wallet extends React.Component {
  render() {
    return (
      <section>
        <div>TrybeWallet</div>
        <Header />
        <WalletForm />
      </section>
    );
  }
}

export default Wallet;
