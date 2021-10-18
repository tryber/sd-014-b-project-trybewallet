import React from 'react';

class WalletForms extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.renderValue = this.renderValue.bind(this);
    this.renderDescription = this.renderDescription.bind(this);
    this.renderCurrency = this.renderCurrency.bind(this);
    this.renderPayment = this.renderPayment.bind(this);
    this.renderTag = this.renderTag.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  renderValue() {
    return (
      <label htmlFor="Expenses">
        Valor
        <input
          type="number"
          name="Expenses"
          id="Expenses"
          placeholder="Expenses"
        />
      </label>

    );
  }

  renderDescription() {
    return (
      <label htmlFor="Description">
        Descrição
        <input
          type="text"
          name="Description"
          id="Description"
          placeholder="Description"
        />
      </label>
    );
  }

  renderCurrency() {
    return (
      <label htmlFor="currency">
        Moeda
        <select name="currency" id="currency">
          <option>BRL</option>
        </select>
      </label>
    );
  }

  renderPayment() {
    return (
      <label htmlFor="Payment">
        Método de Pagamento
        <select
          type="number"
          name="Payment"
          id="Payment"
          placeholder="Payment"
        >
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de Crédito">Cartão de Crédito</option>
          <option value="Cartão de Débito">Cartão de Débito</option>
        </select>
      </label>
    );
  }

  renderTag() {
    return (
      <label htmlFor="Tag">
        Tag
        <select
          type="number"
          name="Tag"
          id="Tag"
          placeholder="Tag"
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
      <form>
        { this.renderValue() }
        { this.renderDescription() }
        { this.renderCurrency() }
        { this.renderPayment() }
        { this.renderTag() }
      </form>
    );
  }
}

export default WalletForms;
