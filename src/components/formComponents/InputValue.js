import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, connect } from 'react-redux';
import { setFormValue } from '../../actions';

const InputValue = ({ value }) => {
  const dispatch = useDispatch();

  return (
    <label htmlFor="value">
      Valor
      <input
        type="text"
        id="value"
        value={ value }
        onChange={ ({ target }) => dispatch(setFormValue(target.value)) }
      />
    </label>
  );
};

InputValue.propTypes = {
  value: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({ value: state.form.value });

export default connect(mapStateToProps)(InputValue);
