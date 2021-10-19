import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';
import AddExpenseForm from '../components/AddExpenseForm';
import { addExpense as addExpenseAction, thunkCurrencies } from '../actions';
import Table from '../components/Table';

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = {
      expenseInfo: {
        value: '0',
        description: '',
        currency: 'USD',
        method: 'Dinheiro',
        tag: 'Alimentação',
      },
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { importedThunk } = this.props;
    importedThunk();
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

  handleClick() {
    const { importedThunk, exchangeRates, expenses, addExpense } = this.props;
    importedThunk();

    const { expenseInfo } = this.state;
    const newExpense = {
      id: expenses.length,
      ...expenseInfo,
      exchangeRates,
    };

    addExpense(newExpense);
  }

  render() {
    const { error } = this.props;
    const { expenseInfo } = this.state;
    if (error) console.error(error);
    return (
      <div>
        <Header />
        <AddExpenseForm
          expenseInfo={ expenseInfo }
          onChange={ this.handleChange }
          addExpense={ this.handleClick }
        />
        <Table />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  error: state.wallet.error,
  exchangeRates: state.wallet.exchangeRates,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  importedThunk: () => dispatch(thunkCurrencies()),
  addExpense: (newExpense) => dispatch(addExpenseAction(newExpense)),
});

Wallet.propTypes = {
  error: PropTypes.string,
  importedThunk: PropTypes.func.isRequired,
  exchangeRates: PropTypes.objectOf(PropTypes.object),
  expenses: PropTypes.arrayOf(PropTypes.object),
  addExpense: PropTypes.func.isRequired,
};

Wallet.defaultProps = {
  error: '',
  exchangeRates: {},
  expenses: [],
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
