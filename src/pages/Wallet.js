import React from 'react';
import Header from '../component/Header';

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = {
      coins: [],
    };

    this.fetchCoins = this.fetchCoins.bind(this);
  }

  componentDidMount() {
    this.fetchCoins();
  }

  async fetchCoins() {
    const fetchedCoins = await fetch('https://economia.awesomeapi.com.br/json/all');
    const coins = await fetchedCoins.json();
    const coinsArray = Object.keys(coins);
    this.setState({
      coins: coinsArray.filter((item) => item !== 'USDT'),
    });
  }

  render() {
    const { coins } = this.state;
    const coinsArray = coins.map((coin, index) => (
      <option key={ index }>
        {coin}
      </option>
    ));
    console.log(coins);
    return (
      <div>
        <Header />
        <form>
          <label htmlFor="valor">
            Valor:
            <input type="text" name="valor" id="valor" />
          </label>
          <label htmlFor="descrição">
            Descrição:
            <input type="text" name="descrição" id="descrição" />
          </label>
          <label htmlFor="moeda">
            Moeda:
            <select name="moeda" id="moeda">
              { coinsArray }
            </select>
          </label>
          <label htmlFor="Método de pagamento">
            Método de pagamento:
            <select name="Método de pagamento" id="Método de pagamento">
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag
            <select id="tag" name="tag">
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

export default Wallet;
