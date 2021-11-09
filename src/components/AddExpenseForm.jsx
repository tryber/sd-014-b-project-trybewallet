import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  addExpense, fetchCurrenciesInfo, updateExpenses } from '../actions/walletActions';

class AddExpenseForm extends Component {
  constructor() {
    super();

    this.state = {
      value: 0,
      description: '',
      currency: 'BRL',
      method: 'Cartão de crédito',
      tag: 'Lazer',
    };

    this.submitExpense = this.submitExpense.bind(this);
  }

  async updateCurrencies() {
    const { fetchCurrenciesData } = this.props;
    await fetchCurrenciesData();
  }

  async submitExpense(event) {
    event.preventDefault();
    await this.updateCurrencies();

    const {
      expenses,
      addNewExpense,
      currenciesData: exchangeRates,
    } = this.props;

    const expense = {
      id: expenses.length,
      ...this.state,
      exchangeRates,
    };

    addNewExpense(expense);
  }

  renderValueFormSection() {
    const { value } = this.state;
    return (
      <label htmlFor="value">
        Valor:
        <input
          id="value"
          required
          type="number"
          value={ value }
          onChange={ (ev) => this.setState({ value: ev.target.value }) }
        />
      </label>
    );
  }

  renderDescriptionFormSection() {
    const { description } = this.state;
    return (
      <label htmlFor="description">
        Descrição:
        <input
          id="description"
          type="text"
          required
          value={ description }
          onChange={ (ev) => this.setState({ description: ev.target.value }) }
        />
      </label>
    );
  }

  renderCurrencyFormSection() {
    const { currency } = this.state;
    const { currenciesData } = this.props;
    const tags = Object.keys(currenciesData || {});
    return (
      <label htmlFor="currency">
        Moeda:
        <select
          id="currency"
          required
          value={ currency }
          onChange={ (ev) => this.setState({ currency: ev.target.value }) }
        >
          {tags.map((tag) => (
            <option value={ tag } key={ tag }>
              {currenciesData[tag].name.split('/')[0]}
            </option>
          ))}
        </select>
      </label>
    );
  }

  renderPaymentFormSection() {
    const { method } = this.state;
    return (
      <label htmlFor="method">
        Método de pagamento:
        <select
          id="method"
          required
          value={ method }
          onChange={ (ev) => this.setState({ method: ev.target.value }) }
        >
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
      </label>
    );
  }

  renderTagFormSection() {
    const { tag } = this.state;
    return (
      <label htmlFor="tag">
        Tag:
        <select
          id="tag"
          required
          value={ tag }
          onChange={ (ev) => this.setState({ tag: ev.target.value }) }
        >
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
      </label>
    );
  }

  render() {
    return (
      <form onSubmit={ this.submitExpense }>
        {this.renderValueFormSection()}
        {this.renderDescriptionFormSection()}
        {this.renderCurrencyFormSection()}
        {this.renderPaymentFormSection()}
        {this.renderTagFormSection()}
        <button type="submit">Adicionar despesa</button>
      </form>
    );
  }
}

AddExpenseForm.propTypes = {
  addNewExpense: PropTypes.func.isRequired,
  currenciesData: PropTypes.shape(PropTypes.object).isRequired,
  expenses: PropTypes.shape({
    length: PropTypes.number.isRequired,
  }).isRequired,
  fetchCurrenciesData: PropTypes.func.isRequired,
};

const mapStateToProps = ({
  user: { email },
  wallet: { currenciesData, expenses },
}) => ({
  email,
  currenciesData,
  expenses,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurrenciesData: () => dispatch(fetchCurrenciesInfo()),
  addNewExpense: (expense) => dispatch(addExpense(expense)),
  update: (updatedExpenses) => dispatch(updateExpenses(updatedExpenses)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddExpenseForm);
