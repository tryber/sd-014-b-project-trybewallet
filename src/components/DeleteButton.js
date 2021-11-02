import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteExpense } from '../actions/index';

function ButtonDelete({ id, deleteItem }) {
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

ButtonDelete.propTypes = {
  id: PropTypes.number.isRequired,
  deleteItem: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({ expenses: state.wallet.expenses });

const mapDispatchToProps = (dispatch) => ({
  deleteItem: (id) => dispatch(deleteExpense(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ButtonDelete);

// Referência para a construção do componente: https://github.com/tryber/sd-014-b-project-trybewallet/pull/1
