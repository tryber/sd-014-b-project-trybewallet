import React from 'react';
import Header from './Header';
import Form from './Form';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        TrybeWallet
        <Header />
        <Form />
      </div>);
  }
}

export default Wallet;
