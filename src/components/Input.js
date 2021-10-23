import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Input extends Component {
  render() {
    const { id, type, name, value, handleChange, placeHolder } = this.props;
    return (
      <label htmlFor={ id }>
        { placeHolder }
        <input
          type={ type }
          id={ id }
          name={ name }
          value={ value }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

Input.propTypes = {
  handleChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeHolder: PropTypes.string.isRequired,
};

export default Input;
