import PropTypes from 'prop-types';
import React, { Component } from 'react';

class InputDefault extends Component {
  render() {
    const { name, onChange, label, value } = this.props;
    return (
      <label htmlFor={ `${name}-input` }>
        { label }
        <input
          type="text"
          name={ name }
          id={ `${name}-input` }
          onChange={ onChange }
          value={ value }
        />
      </label>
    );
  }
}

InputDefault.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default InputDefault;
