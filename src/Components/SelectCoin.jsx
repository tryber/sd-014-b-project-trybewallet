import React from 'react';

class SelectCoin extends React.Component {
  constructor() {
    super();
    this.state = {
      moedas: [],
    };
    this.fetchCoins = this.fetchCoins.bind(this);
  }

  componentDidMount() {
    this.fetchCoins();
  }

  async fetchCoins() {
    const URL_API = 'https://economia.awesomeapi.com.br/json/all';
    const result = await fetch(URL_API);
    const response = await result.json();
    // console.log(response);
    const coin = Object.keys(response).filter((element) => element !== 'USDT');
    this.setState({
      moedas: coin,
    });
    console.log(coin);
  }

  render() {
    const { moedas } = this.state;
    return (
      <label htmlFor="moeda">
        Moeda:
        <select id="moeda">
          { moedas.map((moeda) => (
            <option key={ moeda } value={ moeda }>
              { moeda }
            </option>
          ))}
        </select>
      </label>
    );
  }
}

export default SelectCoin;
