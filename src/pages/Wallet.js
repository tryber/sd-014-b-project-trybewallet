import React from 'react';
import Header from '../components/Header';
import Inputs from '../components/Inputs';
import TabelaNova from '../components/TabelaNova';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <Header />
        <Inputs />
        <TabelaNova />
      </div>
    );
  }
}

export default Wallet;
