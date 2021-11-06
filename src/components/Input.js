import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class Input extends Component {
  render() {
    const { name, label, text, value, onChange } = this.props;
    return (
      <label htmlFor={ name }>
        { label }
        <input
          type={ text }
          name={ name }
          value={ value }
          id={ name }
          onChange={ onChange }
        />
      </label>
    );
  }
}

Input.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  text: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

Input.defaultProps = {
  name: '',
  label: '',
  text: '',
  value: '',
  onChange: '',
};
