import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { addExpenseAction } from '../actions/index';
import ExpenseForm from './ExpenseForm';

class AddExpense extends Component {
  constructor() {
    super();

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(expense) {
    const { addExpense, expenses } = this.props;
    const id = expenses.length ? expenses[expenses.length - 1].id + 1 : 0;
    addExpense({ id, ...expense });
  }

  render() {
    return (
      <ExpenseForm
        onSubmit={ this.onSubmit }
      />
    );
  }
}

AddExpense.propTypes = {
  addExpense: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object),
};

AddExpense.defaultProps = {
  expenses: [],
};

const mapDispatchToProps = (dispatch) => ({
  addExpense: (state) => dispatch(addExpenseAction(state)),
});

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, mapDispatchToProps)(AddExpense);
