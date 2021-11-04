import React from 'react';
import Header from '../components/Header';
import Select from '../components/Select';

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = {
      coins: [],
    };
  }

  componentDidMount = () => {
    this.requestMoedas();
  }

  requestMoedas = async () => {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const dataCoins = await response.json();
    const arrayFinal = Object.keys(dataCoins);
    arrayFinal.splice(1, 1);
    this.setState({
      coins: arrayFinal,
    });
  }

  //  {
  //    usd:
  //    usdt:
  //    cad:
  //    gbp:
  //    ars:
  //    btc:
  //    ltc:
  //    eur:
  //    jpy:
  //    chf:
  //    aud:

  //  }

  render() {
    const { coins } = this.state;
    return (
      <div>
        <Header />
        <form>
          <label htmlFor="Valor">
            Valor
            <input type="text" id="Valor" />
          </label>
          <label htmlFor="Descricao">
            Descrição
            <input type="text" id="Descricao" />
          </label>
          <label htmlFor="Coins">
            Moeda
            <select id="Coins">
              { coins.map((element, index) => (<Select
                key={ index }
                Coin={ element }
              />))}
            </select>
          </label>
          <label htmlFor="payment">
            Método de pagamento
            <select id="payment">
              <option type="combobox">Dinheiro</option>
              <option type="combobox">Cartão de crédito</option>
              <option type="combobox">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tags">
            Tag
            <select id="tags">
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
