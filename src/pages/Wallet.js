import React from 'react';
import Header from './Header';
import Form from './Form';
import Table from './Table';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        TrybeWallet
        <Header />
        <Form />
        <Table />
      </div>);
  }
}

export default Wallet;
