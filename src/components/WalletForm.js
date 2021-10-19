import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchRates } from '../actions';

class WalletForm extends Component {
  constructor(props) {
    super(props);
    this.state = { // estados exigidos nos requisitos
      id: -1,
      value: '',
      description: '',
      currency: '',
      method: '',
      tag: '',
    };
    this.renderForm = this.renderForm.bind(this);
    this.idChange = this.idChange.bind(this);
    this.saveExpensesFunction = this.saveExpensesFunction.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  async idChange() {
    this.setState((prevState) => ({
      id: prevState.id + 1,
    }));
  }

  async saveExpensesFunction() {
    // Chamei assim pra não confundir com a prop saveExpenses
    const { saveExpenses } = this.props;
    await this.idChange();
    saveExpenses(this.state);
    // depois de salvo o estado, deveríamos apagar tudo
    // do formulario  (menos o id, claro)
    this.setState({
      value: 0,
      description: '',
      currency: '',
      method: '',
      tag: '',
    });
  }

  renderValueInput() {
    const { value } = this.state;
    return (
      <label htmlFor="value-input">
        Valor:
        <input
          id="value-input"
          name="value"
          value={ value }
          onChange={ this.handleChange }
        />
        <br />
      </label>
    );
  }

  renderDescription() {
    const { description } = this.state;
    return (
      <label htmlFor="desciption-input">
        Descrição:
        <input
          id="desciption-input"
          name="description"
          value={ description }
          onChange={ this.handleChange }
        />
        <br />
      </label>
    );
  }

  renderCurrenciesFunction() {
    // Chamei assim pra não confundir com a prop 'renderCurrencies'
    const { currency } = this.state;
    const { currencies, renderCurrencies } = this.props;
    return (
      <label htmlFor="currency-select">
        Moeda:
        <select
          id="currency-select"
          name="currency"
          value={ currency }
          onChange={ this.handleChange }
        >
          { renderCurrencies(currencies) }
        </select>
        <br />
      </label>
    );
  }

  renderPaymentMethod() {
    const { method } = this.state;
    return (
      <label htmlFor="payment-method-select">
        Método de pagamento:
        <select
          id="payment-method-select"
          name="method"
          value={ method }
          onChange={ this.handleChange }
        >
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
        <br />
      </label>
    );
  }

  renderTagInfo() {
    const { tag } = this.state;
    return (
      <label htmlFor="tag-select">
        Tag:
        <select
          id="tag-select"
          name="tag"
          value={ tag }
          onChange={ this.handleChange }
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

  renderForm() {
    return (
      <form>
        { this.renderValueInput() }
        { this.renderDescription() }
        { this.renderCurrenciesFunction() }
        { this.renderPaymentMethod() }
        { this.renderTagInfo() }
      </form>
    );
  }

  render() {
    return (
      <div>
        { this.renderForm() }
        <button
          type="button"
          onClick={ this.saveExpensesFunction }
        >
          Adicionar despesa
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  saveExpenses: (state) => dispatch(fetchRates(state)),
});

WalletForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  renderCurrencies: PropTypes.func.isRequired,
  saveExpenses: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(WalletForm);
