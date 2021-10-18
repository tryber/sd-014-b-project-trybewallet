import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class Label extends Component {
  render() {
    const { name, type, dataTestid, minlength, required, handleChange } = this.props;
    const nameFirstLetterUpperCase = name.slice(0, 1).toUpperCase();
    const nameUpper = nameFirstLetterUpperCase + name.slice(1, name.lenght);
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

Label.propTypes = {
  dataTestid: PropTypes.string,
  minlength: PropTypes.string,
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
  type: PropTypes.string,
  handleChange: PropTypes.func,
};

Label.defaultProps = {
  minlength: null,
  dataTestid: '',
  required: false,
  type: 'text',
  handleChange: null,
};
