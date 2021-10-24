import PropTypes from 'prop-types';
import React, { Component } from 'react';

class DescriptionInput extends Component {
  render() {
    const { description, handleChange } = this.props;
    return (
      <label htmlFor="description-input">
        Descrição
        <input
          type="text"
          id="description-input"
          name="description"
          value={ description }
          onChange={ (event) => handleChange(event) }
        />
      </label>
    );
  }
}

DescriptionInput.propTypes = {
  description: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;

export default DescriptionInput;
