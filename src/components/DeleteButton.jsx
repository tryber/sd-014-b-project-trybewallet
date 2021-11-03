import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ActionsCreators from '../actions/index';

function DeleteButton({ id }) {
  const handleDelete = () => {
    ActionsCreators.removeExpense(id);
  };
  return (
    <button type="button" onClick={ handleDelete } data-testid="delete-btn">
      Excluir
    </button>
  );
}

DeleteButton.propTypes = {
  id: PropTypes.number.isRequired,
};

const mapStateToProps = ({ expenses }) => ({ expenses });

const mapDispatchToProps = (dispatch) => bindActionCreators(ActionsCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(DeleteButton);
