import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const paymentMethods = ['', 'Dinheiro', 'Cartão de crédito', 'Cartão de débito'];

const expensesCategory = ['', 'Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

export default class FormExpensesRedux extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
      description: '',
      currency: 'USD',
      paymentMethod: 'Dinheiro',
      category: 'Alimentação',
      currencies: [],
    };

    this.fetchApiCurrencies = this.fetchApiCurrencies.bind(this);
    this.formEstructure = this.formEstructure.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.fetchApiCurrencies();
  }

  async fetchApiCurrencies() {
    const promise = await fetch('https://economia.awesomeapi.com.br/json/all');
    const json = await promise.json();
    delete json.USDT;
    const response = Object.keys(json);
    this.setState({ currencies: response });
  }

  handleChange({ target }) {
    this.setState({ [target.id]: target.value });
  }

  generateSelect(id, label, array) {
    return (
      <label htmlFor={ id }>
        {label}
        <select id="currency">
          { array.length > 0 && array.map((info) => (
            <option
              id={ id }
              key={ info }
              value={ info }
              onClick={ this.handleChange }
            >
              {info}

            </option>)) }
        </select>
      </label>
    );
  }

  formEstructure(response) {
    return (
      <form>
        <label htmlFor="value">
          Valor:
          <input
            type="text"
            id="value"
            placeholder="Digite o Valor"
            onChange={ ({ target }) => this.setState({ value: target.value }) }
          />
        </label>
        <label htmlFor="description">
          Descrição:
          <input
            type="text"
            id="description"
            placeholder="Digite a Descrição"
            onChange={ ({ target }) => this.setState({ description: target.value }) }
          />
        </label>
        { this.generateSelect('currency', 'Moeda:', response) }
        { this.generateSelect('paymentMethod', 'Método de pagamento:', paymentMethods) }
        { this.generateSelect('category', 'Tag:', expensesCategory) }
        <button
          type="button"
          onClick={ () => console.log(this.state) }
        >
          Adicionar despesa
        </button>
      </form>
    );
  }

  render() {
    const { currencies } = this.state;

    return (
      this.formEstructure(currencies)
    );
  }
}
