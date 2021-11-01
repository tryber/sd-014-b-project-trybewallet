import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { currenciesInfo, walletInfo } from '../actions/index';

class AddExpense extends React.Component {
  constructor() {
    super();

    this.state = {
      allCurrencies: [],
      id: 0,
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };

    this.fetchCurrencies = this.fetchCurrencies.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.fetchCurrencies();
  }

  async fetchCurrencies() {
    const { saveCurrencies } = this.props;
    const data = await fetch('https://economia.awesomeapi.com.br/json/all');
    const result = await data.json();
    const currencies = Object.keys(result).filter((currency) => currency !== 'USDT');
    this.setState({
      allCurrencies: currencies,
    });
    saveCurrencies(currencies);
  } // Referência do método para remover o USDT do array: https://github.com/tryber/sd-014-b-project-trybewallet/pull/47/files

  handleChange({ target: { id, value } }) {
    this.setState({ [id]: value });
  }

  async handleClick() {
    const { id, value, description, currency, method, tag } = this.state;
    const { sendExpense } = this.props;
    const getApi = await fetch('https://economia.awesomeapi.com.br/json/all');
    const exchangeRates = await getApi.json();
    const expenseInfo = {
      id,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates,
    };
    sendExpense(expenseInfo);
    this.setState((prev) => ({ id: prev.id + 1 }));
  }

  renderForm() {
    const { allCurrencies, method, tag } = this.state;
    return (
      <form>
        <label htmlFor="value">
          Valor
          <input
            type="text"
            id="value"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="description">
          Descrição
          <input
            type="text"
            id="description"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="currency">
          Moeda
          <select id="currency" onChange={ this.handleChange }>
            { allCurrencies.map(
              (moeda) => (<option key={ moeda }>{moeda}</option>),
            ) }
          </select>
        </label>
        <label htmlFor="method">
          Método de pagamento
          <select id="method" value={ method } onChange={ this.handleChange }>
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select id="tag" value={ tag } onChange={ this.handleChange }>
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
      </form>
    );
  }

  render() {
    return (
      <div>
        { this.renderForm() }
        <button type="button" onClick={ this.handleClick }>
          Adicionar despesa
        </button>
      </div>
    );
  }
}

AddExpense.propTypes = {
  saveCurrencies: PropTypes.func.isRequired,
  sendExpense: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  saveCurrencies: (currencies) => dispatch(currenciesInfo(currencies)),
  sendExpense: (expenses) => dispatch(walletInfo(expenses)),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, mapDispatchToProps)(AddExpense);

// Referência para uso do Redux: https://github.com/tryber/sd-014-b-project-trybewallet/pull/1/files
