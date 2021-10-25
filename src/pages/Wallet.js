import React from 'react';
import Header from '../components/Header';
import FormsWallet from '../components/FormsWallet';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <FormsWallet />
      </div>
    );
  }
}

export default Wallet;
