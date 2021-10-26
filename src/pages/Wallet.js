import React from 'react';
import Expenses from '../components/Expenses';
import Header from '../components/Header';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      xablau: [],
    };
    this.setStateFunc = this.setStateFunc.bind(this);
  }

  async componentDidMount() {
    const request = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await request.json();
    const moedas = Object.keys(data)
      .filter((object) => object !== 'USDT');
    this.setStateFunc(moedas);
  }

  setStateFunc(moedas) {
    this.setState({
      xablau: moedas,
    });
  }

  render() {
    const { xablau } = this.state;
    return (
      <section>
        <Header />
        <Expenses xablau={ xablau } />
      </section>
    );
  }
}

export default Wallet;
