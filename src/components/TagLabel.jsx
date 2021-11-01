import React from 'react';
import PropTypes from 'prop-types';

function TagLabel({ tag, setTag }) {
  return (
    <label htmlFor="tag">
      <select onChange={ ({ target }) => setTag(target.value) } value={ tag } id="tag">
        <option value="Alimentação">Alimentação</option>
        <option value="Lazer">Lazer</option>
        <option value="Trabalho">Trabalho</option>
        <option value="Transporte">Transporte</option>
        <option value="Saúde">Saúde</option>
      </select>
      Tag
    </label>
  );
}

TagLabel.propTypes = {
  tag: PropTypes.string.isRequired,
  setTag: PropTypes.func.isRequired,
};

export default TagLabel;
