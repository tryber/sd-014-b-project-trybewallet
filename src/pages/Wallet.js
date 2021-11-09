import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import {
  addExpense,
  fetchCurrenciesInfo,
  updateExpenses,
} from '../actions/walletActions';
import AddExpenseForm from '../components/AddExpenseForm';

class Wallet extends React.Component {
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

  componentDidMount() {
    this.updateCurrencies();
  }

  convertedValue(value, exchangeValue) {
    return (parseFloat(value) * parseFloat(exchangeValue)).toFixed(2);
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

  renderHeader() {
    const { email, expenses } = this.props;
    const convert = (value, exchangeRate) => parseFloat(value) * parseFloat(exchangeRate);

    const totalExpenses = expenses.reduce(
      (sum, expense) => sum
        + convert(expense.value, expense.exchangeRates[expense.currency].ask),
      0,
    );
    return (
      <header>
        <h1>Wallet</h1>
        <ul>
          <li>
            Email:
            {' '}
            <span data-testid="email-field">{email}</span>
          </li>
          <li>
            Despesa Total:
            {' '}
            <span data-testid="total-field">{totalExpenses}</span>
          </li>
          <li data-testid="header-currency-field">BRL</li>
        </ul>
      </header>
    );
  }

  renderExpenses() {
    const { expenses, update } = this.props;
    const removeBill = (billId) => {
      const updatedExpenses = expenses.filter((bill) => bill.id !== billId);
      update(updatedExpenses);
    };

    return (
      <tbody>
        {expenses.map((bill) => (
          <tr key={ bill.id }>
            <td>{bill.description}</td>
            <td>{bill.tag}</td>
            <td>{bill.method}</td>
            <td>{parseFloat(bill.value)}</td>
            <td>{bill.exchangeRates[bill.currency].name.split('/')[0]}</td>
            <td>
              {parseFloat(bill.exchangeRates[bill.currency].ask).toFixed(2)}
            </td>
            <td>
              {this.convertedValue(
                bill.value,
                bill.exchangeRates[bill.currency].ask,
              )}
            </td>
            <td>Real</td>
            <td>
              <button
                data-testid="delete-btn"
                type="button"
                onClick={ () => removeBill(bill.id) }
              >
                Remover
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    );
  }

  render() {
    return (
      <main className="wallet">
        {this.renderHeader()}
        <AddExpenseForm />
        <table>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Tag</th>
              <th>Método de pagamento</th>
              <th>Valor</th>
              <th>Moeda</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Moeda de conversão</th>
              <th>Editar/Excluir</th>
            </tr>
          </thead>
          {this.renderExpenses()}
        </table>
      </main>
    );
  }
}

Wallet.propTypes = {
  addNewExpense: PropTypes.func.isRequired,
  currenciesData: PropTypes.shape(PropTypes.object).isRequired,
  email: PropTypes.string.isRequired,
  expenses: PropTypes.shape({
    filter: PropTypes.func.isRequired,
    length: PropTypes.number.isRequired,
    map: PropTypes.func.isRequired,
    reduce: PropTypes.func.isRequired,
  }).isRequired,
  fetchCurrenciesData: PropTypes.func.isRequired,
  update: PropTypes.func.isRequired,
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

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
