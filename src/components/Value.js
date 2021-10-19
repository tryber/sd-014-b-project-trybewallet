import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Value extends Component {
  render() {
    const { handleChange, value } = this.props;
    return (
      <label htmlFor="value">
        Valor:
        <input id="value" value={ value } onChange={ (event) => handleChange(event) } type="text" />
      </label>
    );
  }
}

Value.propTypes = {
  value: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Value;
