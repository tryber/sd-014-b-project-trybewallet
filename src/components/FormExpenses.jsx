import React, { Component } from 'react';
import { connect } from 'react-redux';
import Select from './Select';

const paymentOptions = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
const expensesOptions = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
const URL = 'https://economia.awesomeapi.com.br/json/all';

class FormExpenses extends Component() {
  constructor() {
    super();

    this.state = {
      id: 0,
      value: 0,
      description: '',
      currency: '',
      method: '',
      tag: '',
    };

    this.fetchCurrency = this.fetchCurrency.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.renderSelect = this.renderSelect.bind(this);
  }

  componentDidMount() {
    this.fetchCurrency();
  }

  async fetchCurrency () {
    const fetchAPI = await fetch(URL);
    const responseAPI = await fetchAPI.json();
    const currency = console.log(responseAPI);
    return currency;
  }

  renderSelect() {
    return (
      <>
        <Select
          id="currency"
          label="Moeda"
          onChange={ this.handleChange }
          value=""
          info=""
        />
        <Select
          id="method"
          label="Método de pagamento"
          onChange={ this.handleChange }
          value=""
          options={ paymentOptions }
        />
        <Select
          id="tag"
          label="Tag"
          onChange={ this.handleChange }
          value=""
          options={ expensesOptions }
        />
      </>
    );
  }

  handleChange({ target: { id, value } }) {
    this.setState({ [id]: value });
  }

  render() {
    return (
      <form action="">
        <input
          label="Valor"
          type="number"
        />
        <input
          label="Descrição"
          type="text"
        />
        { this.renderSelect() }
      </form>
    );
  }
}

// const mapDispatchToProps = (dispatch) => ({

// });

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps, mapDispatchToProps)(FormExpenses);
