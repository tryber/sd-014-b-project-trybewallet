import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteExpenses } from '../actions/index';

function DeleteBtn({ id, deleteExpense }) {
  const handleDelete = () => {
    deleteExpense(id);
  };

  return (
    <button
      data-testid="delete-btn"
      type="button"
      onClick={ handleDelete }
    >
      Delete

    </button>
  );
}

DeleteBtn.propTypes = {
  id: PropTypes.number.isRequired,
  deleteExpense: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({ expenses: state.wallet.expenses });

const mapDispatchToProps = (dispatch) => ({
  deleteExpense: (id) => dispatch(deleteExpenses(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DeleteBtn);
