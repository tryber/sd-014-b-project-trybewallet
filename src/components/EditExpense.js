import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { editExpenseAction } from '../actions/index';
import ExpenseForm from './ExpenseForm';

class EditExpense extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(expense) {
    const { editExpense, id } = this.props;
    editExpense({ id, ...expense });
  }

  render() {
    const { expense } = this.props;
    return (
      <ExpenseForm
        values={ expense }
        onSubmit={ this.onSubmit }
        isEditing
      />
    );
  }
}

EditExpense.propTypes = {
  expense: PropTypes.shape({
    id: PropTypes.number,
    description: PropTypes.string,
    tag: PropTypes.string,
    method: PropTypes.string,
    value: PropTypes.string,
    currency: PropTypes.string,
    exchangeRates: PropTypes.objectOf(PropTypes.object),
  }).isRequired,
  id: PropTypes.number.isRequired,
  editExpense: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  editExpense: (state) => dispatch(editExpenseAction(state)),
});

export default connect(null, mapDispatchToProps)(EditExpense);
