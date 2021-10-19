import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ExpenseForm from '../components/ExpenseForm';
import { addExpenseAct } from '../actions';
import { getExchangeRates } from '../services/CurrencyAPI';

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = {
      totalExpenses: 0,
      currentCurrency: 'BRL',
      valueInput: '',
      descriptionInput: '',
      currencyInput: 'USD',
      paymentMethodInput: 'Dinheiro',
      categoryInput: 'Alimentação',
      currentID: 0,
      exchangeRates: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.addExpense = this.addExpense.bind(this);
  }

  handleChange(event) {
    const { target: { name, value } } = event;
    this.setState({
      [name]: value,
    });
  }

  addExpense(addExpenseFunc) {
    getExchangeRates().then((results) => {
      this.setState({
        exchangeRates: results,
      });
      const {
        valueInput, descriptionInput, currencyInput, paymentMethodInput, categoryInput,
        currentID, exchangeRates,
      } = this.state;
      const inputsState = {
        valueInput,
        descriptionInput,
        currencyInput,
        paymentMethodInput,
        categoryInput,
        currentID,
        exchangeRates,
      };
      this.setState((prevState) => ({
        currentID: prevState.currentID + 1,
        totalExpenses: prevState.totalExpenses + Number(valueInput) * results[prevState
          .currencyInput].ask,
        valueInput: '',
        descriptionInput: '',
        currencyInput: 'USD',
        paymentMethodInput: 'Dinheiro',
        categoryInput: 'Alimentação',
        exchangeRates: [],
      }));
      addExpenseFunc(inputsState);
    });
  }

  render() {
    const { email, addExpenseDispatch } = this.props;
    const { totalExpenses, currentCurrency,
      valueInput, descriptionInput, currencyInput, paymentMethodInput, categoryInput,
    } = this.state;
    const inputsState = {
      valueInput,
      descriptionInput,
      currencyInput,
      paymentMethodInput,
      categoryInput,
    };

    return (
      <>
        <header>
          <h4 data-testid="email-field">{ email }</h4>
          <div>
            Despesas totais:
            <span data-testid="total-field">{ totalExpenses }</span>
          </div>
          <div>
            Câmbio atual:
            <span data-testid="header-currency-field">{ currentCurrency }</span>
          </div>
          <ExpenseForm handleChange={ this.handleChange } inputsValues={ inputsState } />
          <button
            onClick={ () => this.addExpense(addExpenseDispatch) }
            type="button"
          >
            Adicionar despesa
          </button>
        </header>
        <main>Despesas</main>
      </>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  addExpenseDispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    email: state.user.email,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addExpenseDispatch: (expense) => dispatch(addExpenseAct(expense)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
