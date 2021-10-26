import React from 'react';
import Expenses from '../components/Expenses';
import Header from '../components/Header';

class Wallet extends React.Component {
  async componentDidMount() {
    const request = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await request.json();
    const test = Object.keys(data)
      .filter((object) => object !== 'USDT'); //onde colocar esse valor
  }

  render() {
    return (
      <section>
        <Header />
        <Expenses />
      </section>
    );
  }
}

export default Wallet;
