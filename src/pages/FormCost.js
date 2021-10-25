import React, { Component } from 'react';

class FormCost extends Component {
  constructor() {
    super();
    this.state = {
      moeda: [],
    };
    this.requestCoin = this.requestCoin.bind(this);
  }

  componentDidMount() {
    this.requestCoin();
  }

  async requestCoin() {
    const URL = 'https://economia.awesomeapi.com.br/json/all';
    const request = await fetch(URL);
    const data = await request.json();
    const result = Object.keys(data);
    const coin = result.filter((element) => element !== 'USDT');
    this.setState({
      moeda: coin,
    });
  }

  render() {
    const { moeda } = this.state;
    console.log(moeda);
    if (moeda.length === 0) return <p>Carregando...</p>;
    return (
      <form>
        <label htmlFor="valor">
          Valor:
          <input id="valor" type="text" />
        </label>
        <label htmlFor="description">
          Descrição:
          <input type="text" id="description" />
        </label>
        <label htmlFor="moeda">
          Moeda:
          <select name="moeda" id="moeda">

            { moeda.map((coin, index) => (
              <option
                key={ index }
              >
                {coin }

              </option>))}
          </select>
        </label>
        <label htmlFor="metod">
          Método de pagamento:
          <select name="metod" id="metod">
            <option value="cash">Dinheiro</option>
            <option value="creditCard">Cartão de crédito</option>
            <option value="debitCard">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag:
          <select name="tag" id="tag">
            <option value="food">Alimentação</option>
            <option value="fun">Lazer</option>
            <option value="job">Trabalho</option>
            <option value="transport">Transporte</option>
            <option value="health">Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

export default FormCost;
