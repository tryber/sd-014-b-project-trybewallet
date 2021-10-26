import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { label, type, name, value, id, onChange } = this.props;
    return (
      <form className="form-input">
        <label htmlFor={ id }>
          {label}
          <input
            type={ type }
            name={ name }
            value={ value }
            onChange={ onChange }
            id={ id }
          />
        </label>
      </form>
    );
  }
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
