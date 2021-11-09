import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { editExpenses } from '../actions';

function ButtonAddExpense({ id, editExpense }) {
  const handleEdit = () => {
    editExpense(id);
  };

  return (
    <button
      data-testid="edit-btn"
      type="button"
      onClick={ handleEdit }
      label="edit-btn"
    >
      Edit expenses
    </button>
  );
}

ButtonAddExpense.propTypes = {
  id: PropTypes.number.isRequired,
  editExpense: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({ expenses: state.wallet.expenses });

const mapDispatchToProps = (dispatch) => ({
  editExpense: (id) => dispatch(editExpenses(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ButtonAddExpense);
