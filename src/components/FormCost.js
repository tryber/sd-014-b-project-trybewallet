import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import fetchCurriences from '../fetch/RequestApi';
import '../pages/WalletPage.css';
import ButtonAddExpense from './ButtonAddExpense';
import { handleWalletExpenses } from '../actions/index';

class FormCost extends React.Component {
  constructor() {
    super();
    this.state = {
      typeOfCoins: [],
      description: '',
      method: 'Dinheiro',
      value: '',
      tag: 'Alimentação',
      currency: 'USD',
    };
    this.apiResults = this.apiResults.bind(this);
    this.addNewExpense = this.addNewExpense.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.apiResults();
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  async addNewExpense() {
    const { objExpense } = this.props;
    const { description, value, tag, currency, method } = this.state;
    const expenseObject = {
      description,
      value,
      tag,
      currency,
      method,
      exchangeRates: await fetchCurriences(),
      click: true,
    };
    objExpense(expenseObject);
    /* const test = objExpense(expenseObject);
    console.log(test.object); */
  }

  async apiResults() {
    const results = await fetchCurriences();
    const arrayCurrencies = Object.keys(results);
    this.setState({
      typeOfCoins: arrayCurrencies.filter((item) => item !== 'USDT'),
    });
  }

  render() {
    const { typeOfCoins } = this.state;
    const arrayTags = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    const arrayPayment = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    return (
      <form className="form-wallet-page">
        <label htmlFor="cost-value">
          Valor:
          <input
            className="input-wallet"
            type="number"
            id="cost-value"
            name="value"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="currency">
          Moeda:
          <select id="currency" name="currency" onChange={ this.handleChange }>
            {typeOfCoins.map((coin, index) => (
              <option key={ index }>
                {coin}
              </option>))}
          </select>
        </label>
        <label htmlFor="payment">
          Método de pagamento:
          <select id="payment" name="method" onChange={ this.handleChange }>
            {arrayPayment.map((method, i) => <option key={ i }>{ method }</option>)}
          </select>
        </label>
        <label htmlFor="tag">
          Tag:
          <select id="tag" name="tag" onChange={ this.handleChange }>
            { arrayTags.map((tag, i) => <option key={ i }>{ tag }</option>) }
          </select>
        </label>
        <label htmlFor="description">
          Descrição:
          <input
            type="text"
            id="description"
            name="description"
            onChange={ this.handleChange }
          />
        </label>
        <ButtonAddExpense handleClick={ this.addNewExpense } />
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  objExpense: (expense) => dispatch(handleWalletExpenses(expense)),
});

const mapStateToProps = (state) => ({
  listOfExpenses: state.wallet.expenses,
});

FormCost.propTypes = {
  objExpense: PropTypes.shape({
    description: PropTypes.string,
    value: PropTypes.number,
    tag: PropTypes.string,
    currency: PropTypes.string,
    method: PropTypes.string,
  }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FormCost);
