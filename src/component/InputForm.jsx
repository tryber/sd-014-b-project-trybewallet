import PropTypes from 'prop-types';
import React, { Component } from 'react';

class InputForm extends Component {
  render() {
    const { value, description, handleChange } = this.props;
    return (
      <div>
        <label htmlFor="value">
          Valor:
          <input
            type="text"
            name="value"
            id="value"
            value={ value }
            onChange={ handleChange }
          />
        </label>

        <label htmlFor="description">
          Descrição:
          <input
            type="text"
            name="description"
            id="description"
            value={ description }
            onChange={ handleChange }
          />
        </label>
      </div>
    );
  }
}

InputForm.propTypes = {
  description: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default InputForm;
