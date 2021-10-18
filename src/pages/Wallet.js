import React from 'react';
import Header from '../components/Header';
import WalletForms from '../components/WalletForms';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <WalletForms />
      </div>
    );
  }
}

export default Wallet;
