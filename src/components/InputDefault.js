import PropTypes from 'prop-types';
import React, { Component } from 'react';

class InputDefault extends Component {
  render() {
    const { name, onChange, children } = this.props;
    return (
      <label htmlFor={ `${name}-input` }>
        { children }
        <input
          type="text"
          name={ name }
          id={ `${name}-input` }
          onChange={ onChange }
        />
      </label>
    );
  }
}

InputDefault.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default InputDefault;
