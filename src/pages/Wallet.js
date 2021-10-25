import React from 'react';
import Form from '../components/Form';
import Header from '../components/Header';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <Header />
        <h1>carteira</h1>
        <Form />
      </>
    );
  }
}

export default Wallet;
