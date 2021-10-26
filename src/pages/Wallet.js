import React from 'react';
import Header from '../components/Header';

const INITIAL_STATE = {
  info: {
    value: 0,
  },
};

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = INITIAL_STATE;
  }

  render() {
    return (
      <main>
        <Header />
      </main>
    );
  }
}

export default Wallet;
