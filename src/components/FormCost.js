import React, { Component } from 'react';
import ButtonAdd from './buttonAdd';
import SelectCoin from './selectCoin';
import Header from '../pages/Header';
import TableCost from './tableCost';

class FormCost extends Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      value: 0,
      currency: 'BRL',
      method: 'Dinheiro',
      tag: 'Alimentação',
      description: '',
      exchangeRates: {},
      moeda: [],
      totalValue: 0,
    };
    this.requestCoin = this.requestCoin.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.attCoin = this.attCoin.bind(this);
  }

  componentDidMount() {
    this.requestCoin();
  }

  attCoin() {
    const { currency, exchangeRates, value } = this.state;
    if (currency === 'BRL') {
      const cambio = 1;
      const valueatt = parseFloat(cambio * value);
      this.setState((prev) => ({ totalValue: prev.totalValue + valueatt }));
    } else {
      const cambio = exchangeRates[currency].ask;
      const valueatt = parseFloat(cambio * value);
      this.setState((prev) => ({ totalValue: prev.totalValue + valueatt }));
    }
  }

  async requestCoin() {
    const URL = 'https://economia.awesomeapi.com.br/json/all';
    const request = await fetch(URL);
    const data = await request.json();
    const result = Object.keys(data);
    const coin = result.filter((element) => element !== 'USDT');
    this.setState({
      moeda: coin,
      exchangeRates: data,
    });
  }

  handleChange({ target }) {
    const { id, value } = target;
    this.setState({
      [id]: value,
    });
  }

  render() {
    const { moeda,
      id,
      value,
      currency,
      method,
      tag,
      description,
      exchangeRates,
      totalValue,
    } = this.state;
    return (
      <div>
        <form>
          <Header total={ totalValue } currency={ currency } />
          <label htmlFor="value">
            Valor:
            <input id="value" type="text" onChangeCapture={ this.handleChange } />
          </label>
          <label htmlFor="description">
            Descrição:
            <input type="text" id="description" onChange={ this.handleChange } />
          </label>
          <SelectCoin
            moeda={ moeda }
            handleChange={ this.handleChange }
          />
          <ButtonAdd
            id={ id }
            value={ value }
            currency={ currency }
            method={ method }
            tag={ tag }
            description={ description }
            exchangeRates={ exchangeRates }
            requestCoin={ this.requestCoin }
            attCoin={ this.attCoin }
          />
        </form>
        <TableCost />
      </div>
    );
  }
}

export default FormCost;
