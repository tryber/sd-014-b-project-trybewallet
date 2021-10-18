import React, { Component } from 'react';

const paymentOptions = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
const expenseOptions = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

class WalletForm extends Component {
  constructor() {
    super();
    this.state = {
      valueInput: '',
      descriptionInput: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.labelOptions = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { value, name } = event.target;

    this.setState({
      [name]: value,
    });
  }

  LabelOptions(options, id) {
    return (
      <select
        name={ id }
        id={ id }
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
    const { valueInput, descriptionInput } = this.state;
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
            {this.LabelOptions(paymentOptions, 'payment-options')}
          </label>
          <label htmlFor="tag-options">
            Tag
            {this.LabelOptions(expenseOptions, 'tag-options')}
          </label>
        </form>
      </section>
    );
  }
}

export default WalletForm;
