import React from 'react';
import Header from '../components/Header';
import InputBase from '../components/InputBase';

class Wallet extends React.Component {
  constructor() {
    super();
    this.getCoinsForApi = this.getCoinsForApi.bind(this);
    this.addCoinsToStateArray = this.addCoinsToStateArray.bind(this);
    this.state = { coins: [] };
  }

  async componentDidMount() {
    const coins = await this.getCoinsForApi();
    const size = Object.keys(coins).length;
    for (let index = 0; index < size; index += 1) {
      const element = Object.keys(coins)[index];
      this.addCoinsToStateArray(element);
    }
  }

  async getCoinsForApi() {
    const json = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await json.json();
    return data;
  }

  addCoinsToStateArray(element) {
    if (element !== 'USDT') {
      this.setState((prevState) => ({
        coins: [...prevState.coins, element],
      }));
    }
  }

  render() {
    const { coins } = this.state;
    return (
      <main>
        <Header />
        TrybeWallet
        <form>
          <InputBase name="Valor" type="number" />
          <InputBase name="Descrição" type="text" />
          <label htmlFor="moeda">
            Moeda
            <select id="moeda">
              {coins.map((coin) => (<option key={ coin } value={ coin }>{coin}</option>))}
            </select>
          </label>
          <label htmlFor="metodo-de-pagamento">
            Método de pagamento
            <select id="metodo-de-pagamento">
              <option value="dinheiro">Dinheiro</option>
              <option value="credito">Cartão de crédito</option>
              <option value="debito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag
            <select id="tag">
              <option value="alimentacao">Alimentação</option>
              <option value="lazer">Lazer</option>
              <option value="trabalho">Trabalho</option>
              <option value="transportes">Transporte</option>
              <option value="saude">Saúde</option>
            </select>
          </label>
        </form>
      </main>);
  }
}

export default Wallet;
