import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ValueInput extends Component {
  render() {
    const { value, handleChange } = this.props;

    return (
      <label htmlFor="transactionValue">
        Valor:
        <input
          type="number"
          name="value"
          id="transactionValue"
          value={ value }
          onChange={ (event) => handleChange(event) }
        />
      </label>
    );
  }
}

ValueInput.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default ValueInput;
