import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { expenses } from '../actions/index';

class ExpensesForm extends React.Component {
  constructor() {
    super();

    this.state = {
      currencySymbols: [],
      id: 0,
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };

    this.handleChange = this.handleChange.bind(this);
    this.fetchCurrency = this.fetchCurrency.bind(this);
    this.addExpense = this.addExpense.bind(this);
    this.renderInputs = this.renderInputs.bind(this);
  }

  componentDidMount() {
    this.fetchCurrency();
  }

  async fetchCurrency() {
    const currencyRequest = await fetch('https://economia.awesomeapi.com.br/json/all');

    if (currencyRequest.ok) {
      const currencyJson = await currencyRequest.json();

      const filteredCurrency = Object.keys(currencyJson)
        .filter((currency) => currency !== 'USDT');

      this.setState({ currencySymbols: filteredCurrency });
    }
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  async addExpense() {
    const { id, value, description, currency, method, tag } = this.state;
    const { dispatchSetExpense } = this.props;

    const apiResponse = await fetch('https://economia.awesomeapi.com.br/json/all');
    const exchangeRates = await apiResponse.json();

    this.setState((prevState) => ({
      id: prevState.id + 1,
    }));

    dispatchSetExpense({
      id,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates,
    });
  }

  renderInputs() {
    const { value, description } = this.state;

    return (
      <>
        <label htmlFor="value">
          Valor:
          <input
            type="text"
            name="value"
            id="value"
            value={ value }
            onChange={ this.handleChange }
          />
        </label>

        <label htmlFor="description">
          Descrição:
          <input
            type="text"
            name="description"
            id="description"
            value={ description }
            onChange={ this.handleChange }
          />
        </label>
      </>
    );
  }

  render() {
    const { currencySymbols, currency, method, tag } = this.state;

    const payment = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const tags = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

    return (
      <form>
        { this.renderInputs() }
        <label htmlFor="currency">
          Moeda:
          <select
            name="currency"
            id="currency"
            value={ currency }
            onChange={ this.handleChange }
          >
            { currencySymbols.map((symbol) => (
              <option key={ symbol } value={ symbol }>{symbol}</option>
            )) }
          </select>
        </label>

        <label htmlFor="method">
          Método de pagamento:
          <select
            name="method"
            id="method"
            value={ method }
            onChange={ this.handleChange }
          >
            { payment.map((payOption) => (
              <option key={ payOption } value={ payOption }>{payOption}</option>
            )) }
          </select>
        </label>

        <label htmlFor="tag">
          Tag:
          <select name="tag" id="tag" value={ tag } onChange={ this.handleChange }>
            { tags.map((currentTag) => (
              <option key={ currentTag } value={ currentTag }>{currentTag}</option>
            )) }
          </select>
        </label>
        <button type="button" onClick={ this.addExpense }>Adicionar despesa</button>
      </form>
    );
  }
}

ExpensesForm.propTypes = {
  dispatchSetExpense: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  dispatchSetExpense: (info) => dispatch(expenses(info)),
});

export default connect(null, mapDispatchToProps)(ExpensesForm);
