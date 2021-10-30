import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Input extends Component {
  render() {
    const { label, onChange, onKeyPress, value, id, type = 'text' } = this.props;
    return (
      <label htmlFor={ id }>
        {label}
        <input
          type={ type }
          id={ id }
          onChange={ onChange }
          value={ value }
          onKeyPress={ onKeyPress }
        />
      </label>
    );
  }
}

Input.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onKeyPress: PropTypes.func,
};

Input.defaultProps = {
  type: 'text',
  onKeyPress: null,
};
