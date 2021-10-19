import React from 'react';
import getCoins from '../services/coinsAPI';
import Input from './Input';
import Select from './Select';
import SelectPayment from './SelectPayment';

class FormExpense extends React.Component {
  constructor() {
    super();
    this.state = {
      coins: [],
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
    this.requestCoins = this.requestCoins.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.requestCoins();
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  async requestCoins() {
    const currentCoins = await getCoins().then((response) => response);
    const coinsArrayCurrency = Object.values(currentCoins);
    coinsArrayCurrency.splice(1, 1);
    this.setState({
      coins: coinsArrayCurrency,
    });
  }

  render() {
    const { coins, value, description, currency, method, tag } = this.state;
    const methodPayment = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const expense = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    return (
      <section>
        <form>
          <Input
            name="value"
            description="Valor: "
            handleChange={ this.handleChange }
            value={ value }
          />
          <Input
            description="Descrição: "
            name="description"
            handleChange={ this.handleChange }
            value={ description }
          />
          <Select
            name="currency"
            description="Moeda: "
            handleChange={ this.handleChange }
            value={ currency }
            arrayMap={ coins }
          />
          <SelectPayment
            name="method"
            description="Método de pagamento: "
            handleChange={ this.handleChange }
            arrayMap={ methodPayment }
            value={ method }
          />
          <SelectPayment
            name="tag"
            description="Tag: "
            handleChange={ this.handleChange }
            arrayMap={ expense }
            value={ tag }
          />
        </form>
        <button type="button">Adicionar despesa</button>
      </section>
    );
  }
}

export default FormExpense;
