import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { name, handleChange, value, description } = this.props;
    return (
      <label htmlFor={ name }>
        { description }
        <input
          type="text"
          id={ name }
          name={ name }
          value={ value }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

Input.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  handleChange: PropTypes.func,
  description: PropTypes.string,
}.isRequered;

export default Input;
