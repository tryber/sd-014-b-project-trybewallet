import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DefaultInput extends Component {
  render() {
    const { label, id, handleChange, value } = this.props;
    return (
      <label htmlFor={ id }>
        { label }
        :
        <input
          type="text"
          id={ id }
          value={ value }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

DefaultInput.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;

export default DefaultInput;
