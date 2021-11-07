import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as walletActions from '../actions/walletActions';

class DeleteExpenseButton extends Component {
  handleClick(expenseId) {
    const { deleteExpense } = this.props;
    deleteExpense(expenseId);
  }

  render() {
    const { id } = this.props;
    return (
      <button
        type="button"
        data-testid="delete-btn"
        onClick={ () => this.handleClick(id) }
      >
        Excluir
      </button>
    );
  }
}

DeleteExpenseButton.propTypes = {
  id: PropTypes.objectOf(PropTypes.any).isRequired,
  deleteExpense: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  deleteExpense: (expenseId) => dispatch(walletActions.deleteExpense(expenseId)),
});

export default connect(null, mapDispatchToProps)(DeleteExpenseButton);
