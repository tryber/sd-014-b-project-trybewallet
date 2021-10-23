import React from 'react';
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
        <form>
          <label htmlFor="input-value">
            Valor:
            <input type="text" id="input-value" />
          </label>
          <label htmlFor="input-description">
            Descrição:
            <input type="text" id="input-description" />
          </label>
          <label htmlFor="input-currency">
            Moeda:
            <select id="input-currency">
              {coins.map((coin, i) => (
                <option key={ i } value={ coin }>
                  {coin}
                </option>
              ))}
            </select>
          </label>
          <label htmlFor="input-method">
            Método de pagamento
            <select id="input-method">
              <option value="dinheiro">Dinheiro</option>
              <option value="cartao-credito">Cartão de crédito</option>
              <option value="cartao-debito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="input-tag">
            Tag
            <select id="input-tag">
              <option value="alimentacao">Alimentação</option>
              <option value="lazer">Lazer</option>
              <option value="trabalho">Trabalho</option>
              <option value="transporte">Transporte</option>
              <option value="saude">Saúde</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

export default Wallet;
