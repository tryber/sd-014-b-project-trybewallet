import React from 'react';
import Header from '../components/Header';
import Spending from '../components/Spending';
import './Wallet.css';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Spending />
      </>
    );
  }
}

export default Wallet;
