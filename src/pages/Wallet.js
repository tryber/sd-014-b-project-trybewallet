import React from 'react';
import FormWallet from '../components/FormWallet';
import Header from '../components/Header';

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = {
      coins: [],
    };

    this.requestCoins = this.requestCoins.bind(this);
  }

  componentDidMount() {
    this.requestCoins();
  }

  async requestCoins() {
    const endPoint = 'https://economia.awesomeapi.com.br/json/all';
    const jsonObj = await (await fetch(endPoint)).json();
    const keysCoins = Object.keys(jsonObj);
    const withoutUSDT = keysCoins.filter((coin) => coin !== 'USDT');
    this.setState({
      coins: withoutUSDT,
    });
  }

  render() {
    const { coins } = this.state;
    return (
      <div>
        <Header />
        <FormWallet coins={ coins } />
      </div>
    );
  }
}

export default Wallet;
