import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Value extends Component {
  render() {
    const { value, handleChange } = this.props;

    return (
      <label htmlFor="valueInput">
        Valor:
        <input
          type="number"
          name="valueInput"
          id="valueInput"
          value={ value }
          onChange={ (event) => handleChange(event) }
        />
      </label>
    );
  }
}

Value.propTypes = {
  value: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Value;
