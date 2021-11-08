import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, connect } from 'react-redux';
import { setFormDesc } from '../../actions';

const InputDescription = ({ description }) => {
  const dispatch = useDispatch();

  return (
    <label htmlFor="description">
      Descrição
      <input
        type="text"
        id="description"
        value={ description }
        onChange={ ({ target }) => dispatch(setFormDesc(target.value)) }
      />
    </label>
  );
};

InputDescription.propTypes = {
  description: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({ description: state.form.description });

export default connect(mapStateToProps)(InputDescription);
