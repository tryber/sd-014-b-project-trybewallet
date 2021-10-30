import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Input extends Component {
  render() {
    const { label, onChange, value, id, type = 'text' } = this.props;
    return (
      <label htmlFor={ id }>
        {label}
        <input
          type={ type }
          id={ id }
          onChange={ onChange }
          value={ value }
        />
      </label>
    );
  }
}

Input.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

Input.defaultProps = {
  type: 'text',
};
