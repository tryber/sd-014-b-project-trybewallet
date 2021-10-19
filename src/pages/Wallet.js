import React from 'react';
import HeaderWallet from './HeaderWallet';
import MainWallet from './MainWallet';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <HeaderWallet />
        <MainWallet />
      </div>
    );
  }
}

export default Wallet;
