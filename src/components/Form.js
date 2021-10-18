import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeExpenses } from '../actions';

const tagOptions = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

class Form extends Component {
  constructor() {
    super();

    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target: { id, value } }) {
    this.setState({
      [id]: value,
    });
  }

  async handleClick() {
    const { id, value, description, currency, method, tag } = this.state;
    const { addExpense, updateValue } = this.props;
    const fetchQuotation = await fetch('https://economia.awesomeapi.com.br/json/all');
    const exchangeRates = await fetchQuotation.json();
    this.setState((prevState) => ({
      id: prevState.id + 1,
    }));
    const newExpense = {
      currency, description, exchangeRates, id, method, tag, value };

    addExpense(newExpense);
    updateValue();
  }

  render() {
    const { currencies } = this.props;
    const { value, description, currency, method, tag } = this.state;
    return (
      <form>
        <label htmlFor="value">
          Valor:
          <input id="value" onChange={ this.handleChange } value={ value } />
        </label>
        <label htmlFor="description">
          Descrição:
          <input id="description" onChange={ this.handleChange } value={ description } />
        </label>
        <label htmlFor="currency">
          Moeda:
          <select id="currency" onChange={ this.handleChange } value={ currency }>
            { currencies.map((coin) => (
              <option value={ coin } key={ coin }>
                { coin }
              </option>)) }
          </select>
        </label>
        <label htmlFor="method">
          Método de pagamento:
          <select
            id="method"
            onChange={ this.handleChange }
            value={ method }
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select id="tag" onChange={ this.handleChange } value={ tag }>
            { tagOptions.map((element) => (
              <option key={ element } value={ element }>{ element }</option>))}
          </select>
        </label>
        <button
          type="button"
          onClick={ this.handleClick }
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  addExpense: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  updateValue: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  addExpense: (state) => dispatch(changeExpenses(state)),
});

export default connect(null, mapDispatchToProps)(Form);
