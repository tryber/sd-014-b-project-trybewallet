import React from 'react';
import PropTypes from 'prop-types';

class Inputs extends React.Component {
  render() {
    const { handleChange, valueInput, descriptionInput } = this.props;
    return (
      <>
        <label htmlFor="value-input">
          Valor
          <input
            name="valueInput"
            onChange={ handleChange }
            id="value-input"
            type="text"
            value={ valueInput }
          />
        </label>
        <label htmlFor="description-input">
          Descrição
          <input
            name="descriptionInput"
            onChange={ handleChange }
            id="description-input"
            type="text"
            value={ descriptionInput }
          />
        </label>
      </>
    );
  }
}

Inputs.propTypes = {
  handleChange: PropTypes.func.isRequired,
  valueInput: PropTypes.string.isRequired,
  descriptionInput: PropTypes.string.isRequired,
};

export default Inputs;
