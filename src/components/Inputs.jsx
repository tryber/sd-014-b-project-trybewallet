import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class Inputs extends Component {
  render() {
    const { handleChange, type, id, name, textLabel } = this.props;

    return (
      <label htmlFor={ id }>
        { textLabel }
        <input
          onChange={ handleChange }
          type={ type }
          id={ id }
          name={ name }
        />
      </label>
    );
  }
}

Inputs.propTypes = {
  handleChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  textLabel: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
