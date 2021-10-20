import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';
import ExpenseForm from '../components/ExpenseForm';
import {
  addExpense as addExpenseAction,
  editExpense as editExpenseAction,
  updateExpense as updateExpenseAction,
  thunkCurrencies,
} from '../actions';
import Table from '../components/Table';

const INITIAL_STATE = {
  expenseInfo: {
    value: '0',
    description: '',
    currency: 'USD',
    method: 'Dinheiro',
    tag: 'Alimentação',
  },
};

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = INITIAL_STATE;

    this.handleChange = this.handleChange.bind(this);
    this.handleAddClick = this.handleAddClick.bind(this);
    this.handleEditClick = this.handleEditClick.bind(this);
    this.setStateWithExpenseToBeEdited = this.setStateWithExpenseToBeEdited.bind(this);
    this.handleExpenseUpdate = this.handleExpenseUpdate.bind(this);
  }

  componentDidMount() {
    const { importedThunk } = this.props;
    importedThunk();
  }

  setStateWithExpenseToBeEdited() {
    const { expenseToBeEdited } = this.props;
    const { value, description, currency, method, tag } = expenseToBeEdited;
    this.setState({
      expenseInfo: {
        value,
        description,
        currency,
        method,
        tag,
      },
    });
  }

  async handleEditClick(id) {
    const { editExpense } = this.props;
    await editExpense(id);

    this.setStateWithExpenseToBeEdited();
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState((state) => ({
      expenseInfo: {
        ...state.expenseInfo,
        [name]: value,
      },
    }));
  }

  handleAddClick() {
    const { importedThunk, exchangeRates, expenses, addExpense } = this.props;
    importedThunk();

    const { expenseInfo } = this.state;
    const newExpense = {
      id: expenses.length,
      ...expenseInfo,
      exchangeRates,
    };

    addExpense(newExpense);

    this.setState(INITIAL_STATE);
  }

  handleExpenseUpdate() {
    const { updateExpense, expenseToBeEdited } = this.props;
    const { expenseInfo } = this.state;
    const expenseEdited = {
      ...expenseInfo,
      id: expenseToBeEdited.id,
      exchangeRates: expenseToBeEdited.exchangeRates,
    };

    updateExpense(expenseEdited);

    this.setState(INITIAL_STATE);
  }

  render() {
    const { error } = this.props;
    const { expenseInfo } = this.state;
    if (error) console.error(error);
    return (
      <div>
        <Header />
        <ExpenseForm
          expenseInfo={ expenseInfo }
          onChange={ this.handleChange }
          addExpense={ this.handleAddClick }
          updateExpense={ this.handleExpenseUpdate }
        />
        <Table handleEditClick={ this.handleEditClick } />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  error: state.wallet.error,
  exchangeRates: state.wallet.exchangeRates,
  expenses: state.wallet.expenses,
  expenseToBeEdited: state.wallet.expenseToBeEdited,
});

const mapDispatchToProps = (dispatch) => ({
  importedThunk: () => dispatch(thunkCurrencies()),
  addExpense: (newExpense) => dispatch(addExpenseAction(newExpense)),
  editExpense: (id) => dispatch(editExpenseAction(id)),
  updateExpense: (expenseEdited) => dispatch(updateExpenseAction(expenseEdited)),
});

Wallet.propTypes = {
  error: PropTypes.string,
  importedThunk: PropTypes.func.isRequired,
  exchangeRates: PropTypes.objectOf(PropTypes.object),
  expenses: PropTypes.arrayOf(PropTypes.object),
  addExpense: PropTypes.func.isRequired,
  editExpense: PropTypes.func.isRequired,
  updateExpense: PropTypes.func.isRequired,
  expenseToBeEdited: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.object]),
  ),
};

Wallet.defaultProps = {
  error: '',
  exchangeRates: {},
  expenses: [],
  expenseToBeEdited: {},
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
