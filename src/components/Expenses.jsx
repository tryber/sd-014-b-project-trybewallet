import React, { Component } from 'react';
import ExpensesLabel from './ExpensesLabel';
import SelectLabel from './SelectLabel';

const paymentMethods = [
  {
    value: 'cash',
    content: 'Dinheiro',
  },
  {
    value: 'creditCard',
    content: 'Cartão de crédito',
  },
  {
    value: 'debitCard',
    content: 'Cartão de débito',
  },
];
const tag = [
  {
    value: 'food',
    content: 'Alimentação',
  },
  {
    value: 'recreation',
    content: 'Lazer',
  },
  {
    value: 'work',
    content: 'Trabalho',
  },
  {
    value: 'transport',
    content: 'Transporte',
  },
  {
    value: 'health',
    content: 'Saúde',
  },
];

class Expenses extends Component {
  constructor() {
    super();
    this.state = {
      value: 0,
      description: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  render() {
    const { value, description } = this.state;
    return (
      <form>
        <ExpensesLabel
          text="Valor: "
          type="number"
          onChange={ this.handleChange }
          value={ value }
          name="value"
        />
        <ExpensesLabel
          text="Descrição: "
          type="text"
          onChange={ this.handleChange }
          value={ description }
          name="description"
        />
        <SelectLabel
          html="currency"
          text="Moeda"
          option={ [{ content: 'URL', value: '5,17' }] }
        />
        <SelectLabel
          html="paymentMethod"
          text="Método de pagamento"
          option={ paymentMethods }
        />
        <SelectLabel
          html="expenses"
          text="Tag"
          option={ tag }
        />
      </form>
    );
  }
}

export default Expenses;
