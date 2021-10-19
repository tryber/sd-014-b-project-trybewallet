import PropTypes from 'prop-types';
import React, { Component } from 'react';
import firstLetterUpperCase from './helperFunctions';

export default class Input extends Component {
  render() {
    const { name, type, dataTestid, minlength, required, handleChange } = this.props;
    const nameUpper = firstLetterUpperCase(name);
    return (
      <label htmlFor={ name }>
        {`${nameUpper}:`}
        <input
          onChange={ handleChange }
          name={ name }
          id={ name }
          type={ type }
          data-testid={ dataTestid }
          minLength={ minlength }
          required={ required }
        />
      </label>
    );
  }
}

Input.propTypes = {
  dataTestid: PropTypes.string,
  minlength: PropTypes.string,
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
  type: PropTypes.string,
  handleChange: PropTypes.func,
};

Input.defaultProps = {
  minlength: null,
  dataTestid: '',
  required: false,
  type: 'text',
  handleChange: null,
};
