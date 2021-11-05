import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { deleteExpenses } from '../actions';

function DeleteButton({ id, deleteExpense }) {
  const handleDelete = () => {
    deleteExpense(id);
  };

  return (
    <div>
      <label id="myinput"></label>
      <button
        id="myinput"
        type="button"
        onClick={ handleDelete }
        className="btn btn-danger"
        data-testid="delete-btn"
      />
    </div>
  );
}

DeleteButton.propTypes = {
  id: PropTypes.number.isRequired,
  deleteExpense: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({ expenses: state.wallet.expenses });

const mapDispatchToProps = (dispatch) => ({
  deleteExpense: (id) => dispatch(deleteExpenses(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DeleteButton);
