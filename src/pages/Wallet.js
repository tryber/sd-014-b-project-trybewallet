import React from 'react';
import WalletForm from '../components/WalletForm';
import Header from '../components/Header';
import WalletTable from '../components/WalletTable';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <WalletForm />
        <WalletTable />
      </div>
    );
  }
}

export default Wallet;
