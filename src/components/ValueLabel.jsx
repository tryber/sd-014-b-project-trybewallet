import React from 'react';
import PropTypes from 'prop-types';

function ValueLabel({ value, setValue }) {
  return (
    <label htmlFor="value-field">
      Valor
      <input
        type="text"
        id="value-field"
        placeholder="Digite o valor da despesa"
        value={ value }
        onChange={ (event) => setValue(event.target.value) }
      />
    </label>
  );
}

ValueLabel.propTypes = {
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
};

export default ValueLabel;
