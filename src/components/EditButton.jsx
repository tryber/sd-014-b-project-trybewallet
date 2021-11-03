import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ActionsCreators from '../actions/index';

function EditButton({ id }) {
  const handleEdit = () => {
    ActionsCreators.editExpenses(id);
  };

  return (
    <button type="button" onClick={ handleEdit }>
      Editar
    </button>
  );
}

EditButton.propTypes = {

};

const mapStateToProps = ({ expenses }) => ({ expenses });

const mapDispatchToProps = (dispatch) => bindActionCreators(ActionsCreators, dispatch);

EditButton.propTypes = {
  id: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditButton);
