import React from 'react';
import WalletForm from '../components/WalletForm';
import Header from '../components/Header';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <WalletForm />
      </div>
    );
  }
}

export default Wallet;
