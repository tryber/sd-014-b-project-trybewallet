import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { EXPENSE_DISPATCH, LOAD_CURRENCIES } from '../actions';
import ExpenseEditorForm from '../components/ExpenseEditorForm';
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
    const { state: { value }, props: { expenses, submitExpense } } = this;
    if (value === '') return;
    submitExpense(expenses, this.state);
    this.setState(INITIAL_STATE);
  };

  render() {
    const { editor } = this.props;
    return (
      <>
        <Header />
        { editor ? <ExpenseEditorForm /> : (
          <WalletForm
            props={ this.props }
            state={ this.state }
            onEntries={ this.handleEntries }
            onSubmit={ this.handleSubmit }
          />
        ) }
        <ExpensesTable />
      </>);
  }
}

Wallet.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.any).isRequired,
  getCurrencies: PropTypes.func.isRequired,
  submitExpense: PropTypes.func.isRequired,
  editor: PropTypes.bool.isRequired,
};

function mapState({ wallet: { hasCurrencies, currencies, expenses, editor } }) {
  return { hasCurrencies, currencies, expenses, editor };
}

function mapDispatch(dispatch) {
  return {
    getCurrencies: () => dispatch(LOAD_CURRENCIES()),
    submitExpense: (expense, state) => dispatch(EXPENSE_DISPATCH(expense, state)),
  };
}

export default connect(mapState, mapDispatch)(Wallet);
