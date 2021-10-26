import React from 'react';
import Header from '../components/Header';
import Forms from '../components/Forms';
import Table from './Table';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Forms />
        <Table />
      </div>
    );
  }
}

export default Wallet;
