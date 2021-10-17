import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class Label extends Component {
  render() {
    const { name, type, dataTestid, minlength, required, handleChange } = this.props;
    return (
      <label htmlFor={ name }>
        {`${name}:`}
        <input
          onChange={ handleChange }
          name={ name }
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
  dataTestid: PropTypes.string.isRequired,
  minlength: PropTypes.string,
  name: PropTypes.string.isRequired,
  required: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

Label.defaultProps = {
  minlength: null,
};
