import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteExpense } from '../actions/index';

function DelButton({ id, deleteItem }) {
  const handleDelete = () => {
    deleteItem(id);
  };

  return (
    <button
      type="button"
      onClick={ handleDelete }
      className="btn btn-danger"
      data-testid="delete-btn"
    >
      Deletar
    </button>
  );
}

DelButton.propTypes = {
  id: PropTypes.number.isRequired,
  deleteItem: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({ expenses: state.wallet.expenses });

const mapDispatchToProps = (dispatch) => ({
  deleteItem: (id) => dispatch(deleteExpense(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DelButton);
