import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { BsFillTrashFill } from 'react-icons/bs';
import { deleteExpenses } from '../actions';

function ButtonDelete({ id, deleteExpense }) {
  const handleDelete = () => {
    deleteExpense(id);
  };

  return (
    <button
      type="button"
      onClick={ handleDelete }
      data-testid="delete-btn"
    >
      <BsFillTrashFill />

    </button>
  );
}

ButtonDelete.propTypes = {
  id: PropTypes.number.isRequired,
  deleteExpense: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({ expenses: state.wallet.expenses });

const mapDispatchToProps = (dispatch) => ({
  deleteExpense: (id) => dispatch(deleteExpenses(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ButtonDelete);
