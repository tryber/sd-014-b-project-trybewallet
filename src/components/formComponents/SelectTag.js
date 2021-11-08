import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, connect } from 'react-redux';
import { setFormTag } from '../../actions';

const SelectTag = ({ tag }) => {
  const dispatch = useDispatch();

  return (
    <label htmlFor="tag">
      Tag
      <select
        name="tag"
        id="tag"
        value={ tag }
        onChange={ ({ target }) => dispatch(setFormTag(target.value)) }
      >
        <option value="Alimentação">Alimentação</option>
        <option value="Lazer">Lazer</option>
        <option value="Trabalho">Trabalho</option>
        <option value="Transporte">Transporte</option>
        <option value="Saúde">Saúde</option>
      </select>
    </label>
  );
};

SelectTag.propTypes = {
  tag: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({ tag: state.form.tag });

export default connect(mapStateToProps)(SelectTag);
