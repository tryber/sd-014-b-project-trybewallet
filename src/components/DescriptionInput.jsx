import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DescriptionInput extends Component {
  render() {
    const { value, handleChange } = this.props;

    return (
      <label htmlFor="transactionDescription">
        Descrição:
        <input
          type="text"
          name="description"
          id="transactionDescription"
          value={ value }
          onChange={ (event) => handleChange(event) }
        />
      </label>
    );
  }
}

DescriptionInput.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default DescriptionInput;
