import PropTypes from 'prop-types';
import React from 'react';

class FormInputs extends React.Component {
  render() {
    const { handleChange, value: { value, description } } = this.props;
    return (
      <>
        <label htmlFor="value_input">
          Valor
          <input
            type="number"
            name="value"
            id="value_input"
            onChange={ (e) => handleChange(e) }
            value={ value }
          />
        </label>
        <label htmlFor="description_input">
          Descrição:
          <input
            type="text"
            name="description"
            id="description_input"
            value={ description }
            onChange={ handleChange }
          />
        </label>
      </>
    );
  }
}

FormInputs.propTypes = {
  handleChange: PropTypes.func,
  value: PropTypes.string,
}.isRequired;

export default FormInputs;
