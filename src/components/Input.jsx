import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Input extends Component {
  render() {
    const { type, name, nameLabel, onChange, value, id, placeholder } = this.props;
    return (
      <label htmlFor={ id }>
        {nameLabel}
        <input
          type={ type }
          id={ id }
          onChange={ onChange }
          value={ value }
          name={ name }
          placeholder={ placeholder }
        />
      </label>
    );
  }
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  nameLabel: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  id: PropTypes.string,
  onChange: PropTypes.func,
};

Input.defaultProps = {
  nameLabel: '',
  value: '',
  name: '',
  placeholder: '',
  id: '',
  onChange: null,
};
