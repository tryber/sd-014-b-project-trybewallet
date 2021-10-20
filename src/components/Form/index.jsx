import React from 'react';

import payments from '../../services/payments';
import expenditures from '../../services/expenditures';
import getCurrencies from '../../services/currenciesAPI';

import Input from '../Input/index';
import Select from '../Select';

class Form extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      description: '',
      coins: [],
      currency: '',
      payment: '',
      category: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.setCoinsInState = this.setCoinsInState.bind(this);
  }

  async componentDidMount() {
    let currencies = await getCurrencies();
    delete currencies.USDT;
    currencies = Object.values(currencies);
    this.setCoinsInState(currencies);
  }

  setCoinsInState(currencies) {
    const coins = currencies.map((currency) => currency.code);
    this.setState({ coins: [...coins] });
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { value, description, currency, coins, payment, category } = this.state;
    console.log(coins);
    return (
      <form>
        <Input
          id="input-value"
          type="number"
          label="Valor"
          name="value"
          value={ value }
          onChange={ this.handleChange }
        />
        <Input
          id="input-description"
          label="Descrição"
          name="description"
          value={ description }
          onChange={ this.handleChange }
        />
        <Select
          id="select-currency"
          label="Moeda"
          name="currency"
          options={ coins }
          value={ currency }
          onChange={ this.handleChange }
        />
        <Select
          id="select-payment"
          name="payment"
          label="Método de pagamento"
          options={ payments }
          value={ payment }
          onChange={ this.handleChange }
        />
        <Select
          id="select-category"
          name="category"
          label="Tag"
          options={ expenditures }
          value={ category }
          onChange={ this.handleChange }
        />
      </form>
    );
  }
}

export default Form;
