import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { deleteExpense, updateTotal } from '../actions';

class DeleteButton extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { expenseId, deleteExpenseProp, updateTotalProp } = this.props;
    deleteExpenseProp(expenseId);
    updateTotalProp();
  }

  render() {
    return (
      <button
        data-testid="delete-btn"
        type="submit"
        onClick={ this.handleClick }
      >
        Delete
      </button>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  deleteExpenseProp: (id) => dispatch(deleteExpense(id)),
  updateTotalProp: () => dispatch(updateTotal()),
});

DeleteButton.propTypes = {
  deleteExpenseProp: PropTypes.func.isRequired,
  updateTotalProp: PropTypes.func.isRequired,
  expenseId: PropTypes.string.isRequired,
};

export default connect(null, mapDispatchToProps)(DeleteButton);
