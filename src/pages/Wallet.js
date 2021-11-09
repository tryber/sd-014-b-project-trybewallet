import React from 'react';
import Expenses from '../components/Expenses';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Expenses />
        </div>
      </div>
    );
  }
}

export default Wallet;
