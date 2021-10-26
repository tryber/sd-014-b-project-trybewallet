import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Input extends Component {
  render() {
    const {
      type,
      name,
      nameLabel,
      onChange,
      value,
      id,
      placeholder,
      dataTestid,
    } = this.props;
    return (
      <label htmlFor={ id }>
        {nameLabel}
        <input
          data-testid={ dataTestid }
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
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  dataTestid: PropTypes.string,
};

Input.defaultProps = {
  nameLabel: '',
  placeholder: '',
  dataTestid: '',
};
