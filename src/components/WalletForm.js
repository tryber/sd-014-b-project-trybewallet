import React, { Component } from 'react';

const paymentOptions = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
const expenseOptions = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

class WalletForm extends Component {
  constructor() {
    super();
    this.state = {
      valueInput: '',
      descriptionInput: '',
      payments: paymentOptions,
      expenses: expenseOptions,
      paymentValue: paymentOptions[0],
      expenseValue: expenseOptions[0],
    };
    this.handleChange = this.handleChange.bind(this);
    this.labelOptions = this.handleChange.bind(this);
  }

  async componentDidMount() {
    const endpoint = 'https://economia.awesomeapi.com.br/json/all';
    const fetchUrl = await fetch(endpoint);
    const jsonParsing = await fetchUrl.json();
    console.log(jsonParsing);
  }

  handleChange(event) {
    const { value, name } = event.target;

    this.setState({
      [name]: value,
    });
  }

  LabelOptions(options, id, name, value) {
    return (
      <select
        name={ name }
        id={ id }
        value={ value }
        onChange={ this.handleChange }
      >
        {options.map((option, index) => (
          <option key={ index }>
            { option }
          </option>
        ))}
      </select>
    );
  }

  render() {
    const {
      valueInput,
      descriptionInput,
      payments, expenses, paymentValue, expenseValue } = this.state;
    return (
      <section>
        <form>
          <label htmlFor="value-input">
            Valor
            <input
              type="number"
              name="valueInput"
              id="value-input"
              value={ valueInput }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="description-input">
            Descrição
            <input
              type="text"
              name="descriptionInput"
              id="description-input"
              value={ descriptionInput }
              onChange={ this.handleChange }

            />
          </label>
          <label htmlFor="currency-input">
            Moeda
            <select
              name="currency-input"
              id="currency-input"
            >
              moeda
            </select>
          </label>
          <label htmlFor="payment-options">
            Método de pagamento
            {this.LabelOptions(payments, 'payment-options', 'paymentValue', paymentValue)}
          </label>
          <label htmlFor="tag-options">
            Tag
            {this.LabelOptions(expenses, 'tag-options', 'expenseValue', expenseValue)}
          </label>
        </form>
      </section>
    );
  }
}

export default WalletForm;
