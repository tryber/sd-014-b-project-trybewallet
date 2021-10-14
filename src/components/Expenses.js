import React, { Component } from 'react';

class Expenses extends Component {
  constructor() {
    super();
    this.renderValue = this.renderValue.bind(this);
    this.renderDescription = this.renderDescription.bind(this);
    this.renderSelectCurrency = this.renderSelectCurrency.bind(this);
    this.renderSelectPayMethod = this.renderSelectPayMethod.bind(this);
    this.renderTag = this.renderTag.bind(this);
  }

  renderValue() {
    return (
      <label htmlFor="value">
        Valor
        <input type="number" id="value" />
      </label>
    );
  }

  renderDescription() {
    return (
      <label htmlFor="input-description">
        Descrição
        <input type="text" id="input-description" />
      </label>
    );
  }

  renderSelectCurrency() {
    return (
      <label htmlFor="input-select-currency">
        Moeda
        <select id="input-select-currency">
          <option>teste</option>
        </select>
      </label>
    );
  }

  renderSelectPayMethod() {
    return (
      <label htmlFor="input-select-pay">
        Método de pagamento
        <select id="input-select-pay">
          <option>Dinheiro</option>
          <option>Cartão de crédito</option>
          <option>Cartão de débito</option>
        </select>
      </label>
    );
  }

  renderTag() {
    return (
      <label htmlFor="tag-category">
        Tag
        <select id="tag-category">
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
      <form>
        { this.renderValue() }
        { this.renderDescription() }
        { this.renderSelectCurrency() }
        { this.renderSelectPayMethod() }
        { this.renderTag() }
      </form>
    );
  }
}

export default Expenses;
