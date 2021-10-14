// Requisito 6
import React, { Component } from 'react';
// Requisito 7 e 8
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchApi, expenseApi } from '../actions';

class Expenses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      description: '',
    };

    this.renderValue = this.renderValue.bind(this);
    this.renderDescription = this.renderDescription.bind(this);
    this.renderSelectCurrency = this.renderSelectCurrency.bind(this);
    this.renderSelectPayMethod = this.renderSelectPayMethod.bind(this);
    this.renderTag = this.renderTag.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { getData } = this.props;
    getData();
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  handleSubmit() {
    const { dispatchExpenses, expense } = this.props;
    dispatchExpenses(this.state, expense.length);

    this.setState({
      value: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      description: '',
    });
  }

  renderValue() {
    const { value } = this.state;
    return (
      <label htmlFor="value">
        Valor
        <input
          type="number"
          name="value"
          id="value"
          value={ value }
          onChange={ this.handleChange }
        />
        {' '}

      </label>
    );
  }

  renderDescription() {
    const { description } = this.state;
    return (
      <label htmlFor="input-description">
        Descrição
        <input
          type="text"
          name="description"
          id="input-description"
          value={ description }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  renderSelectCurrency() {
    const { getDataCurrencies } = this.props;
    const { currency } = this.state;
    return (
      <label htmlFor="input-select-currency">
        Moeda
        <select
          name="currency"
          id="input-select-currency"
          value={ currency }
          onChange={ this.handleChange }
        >
          { getDataCurrencies.map((currencies, index) => (
            <option
              key={ index }
              value={ currencies }
            >
              { currencies }
            </option>
          )) }
        </select>
      </label>
    );
  }

  renderSelectPayMethod() {
    const { method } = this.state;
    return (
      <label htmlFor="input-select-pay">
        Método de pagamento
        <select
          name="method"
          id="input-select-pay"
          value={ method }
          onChange={ this.handleChange }
        >
          <option>Dinheiro</option>
          <option>Cartão de crédito</option>
          <option>Cartão de débito</option>
        </select>
      </label>
    );
  }

  renderTag() {
    const { tag } = this.state;
    return (
      <label htmlFor="tag-category">
        Tag
        <select
          name="tag"
          id="tag-category"
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

  render() {
    return (
      <form>
        { this.renderValue() }
        { this.renderDescription() }
        { this.renderSelectCurrency() }
        { this.renderSelectPayMethod() }
        { this.renderTag() }
        <button
          type="button"
          onClick={ () => this.handleSubmit() }
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getData: (state) => dispatch(fetchApi(state)),
  dispatchExpenses: (state, id) => dispatch(expenseApi(state, id)),

});

const mapStateToProps = (state) => ({
  getDataCurrencies: state.wallet.currencies,
  expense: state.wallet.expenses,

});

Expenses.propTypes = {
  getData: PropTypes.func,
  getDataCurrencies: PropTypes.shape(),
  dispatchExpenses: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Expenses);
