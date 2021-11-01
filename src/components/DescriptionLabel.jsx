import React from 'react';
import PropTypes from 'prop-types';

function DescriptionLabel({ description, setDescription }) {
  return (
    <label htmlFor="expense-description">
      <input
        type="text"
        placeholder="descrição da despesa"
        id="expense-description"
        value={ description }
        onChange={ ({ target }) => setDescription(target.value) }
      />
      Descrição
    </label>
  );
}

DescriptionLabel.propTypes = {
  description: PropTypes.string.isRequired,
  setDescription: PropTypes.func.isRequired,
};

export default DescriptionLabel;
