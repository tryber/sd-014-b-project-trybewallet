import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { EXPENSE_DISPATCH, LOAD_CURRENCIES } from '../actions';
import ExpensesTable from '../components/ExpensesTable';
import Header from '../components/Header';
import WalletForm from '../components/WalletForm';

const INITIAL_STATE = {
  value: '',
  description: '',
  currency: 'USD',
  method: 'Dinheiro',
  tag: 'Alimentação',
};

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = INITIAL_STATE;
  }

  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  handleEntries = ({ target: { name, value } }) => this.setState({ [name]: value });

  handleSubmit = () => {
    const { expenses, submitExpense } = this.props;
    submitExpense(expenses, this.state);
    this.setState(INITIAL_STATE);
  };

  render() {
    return (
      <div>
        <Header />
        <WalletForm
          props={ this.props }
          state={ this.state }
          onEntries={ this.handleEntries }
          onSubmit={ this.handleSubmit }
        />
        <ExpensesTable />
      </div>);
  }
}

Wallet.propTypes = {
  expenses: PropTypes.arrayOf(String).isRequired,
  getCurrencies: PropTypes.func.isRequired,
  submitExpense: PropTypes.func.isRequired,
};

function mapState({ wallet: { hasCurrencies, currencies, expenses } }) {
  return { hasCurrencies, currencies, expenses };
}

function mapDispatch(dispatch) {
  return {
    getCurrencies: () => dispatch(LOAD_CURRENCIES()),
    submitExpense: (expense, state) => dispatch(EXPENSE_DISPATCH(expense, state)),
  };
}

export default connect(mapState, mapDispatch)(Wallet);
