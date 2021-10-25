import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Input extends Component {
  constructor() {
    super();

    this.capitalize = this.capitalize.bind(this);
  }

  // Função vista em: https://stackoverflow.com/questions/1026069/how-do-i-make-the-first-letter-of-a-string-uppercase-in-javascript
  capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  render() {
    const { name, type, value, onChange } = this.props;
    return (
      <label htmlFor={ name }>
        { this.capitalize(name) }
        <input
          type={ type }
          name={ name }
          id={ name }
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
