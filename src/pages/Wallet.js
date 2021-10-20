import React from 'react';
import Header from '../components/Header';
import Form from '../components/Form';
import Table from '../components/Table';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <div>TrybeWallet</div>
        <Header />
        <Form />
        <Table />
      </div>
    );
  }
}

export default Wallet;
