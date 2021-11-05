import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { editExpenses } from '../actions';

function EditButton({ id, editExpense }) {
  const handleEdit = () => {
    editExpense(id);
  };

  return (
    <button
      type="button"
      onClick={ handleEdit }
      className="btn btn-warning"
      data-testid="edit-btn"
    >
    
    </button>
  );
}

EditButton.propTypes = {
  id: PropTypes.number.isRequired,
  editExpense: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({ expenses: state.wallet.expenses });

const mapDispatchToProps = (dispatch) => ({
  editExpense: (id) => dispatch(editExpenses(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditButton);
