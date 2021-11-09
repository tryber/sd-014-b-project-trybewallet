import React from 'react';

import AddRow from '../components/AddRow';
import Form from '../components/Form';
import Header from '../components/Header';
import Table from '../components/Table';

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = {
      coins: [],
    };
  }

  requestMoedas = async () => {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const dataCoins = await response.json();
    delete dataCoins.USDT;
    const arrayFinal = Object.keys(dataCoins);
    // arrayFinal.splice(1, 1);
    this.setState({
      coins: arrayFinal,
    });
  }

  componentDidMount = () => {
    this.requestMoedas();
  }

  render() {
    const { coins } = this.state;
    return (
      <div>
        <Header />
        <Form coins={ coins } />
        <Table />
        <AddRow />
      </div>
    );
  }
}

export default Wallet;
