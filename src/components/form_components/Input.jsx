import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Input extends Component {
  render() {
    const { value, idAndFor, title, onChange } = this.props;
    return (
      <label htmlFor={ idAndFor }>
        { title }
        <input
          type="text"
          name={ idAndFor }
          id={ idAndFor }
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

Input.propTypes = {
  idAndFor: PropTypes.any,
  onChange: PropTypes.any,
  title: PropTypes.any,
  value: PropTypes.any,
}.isRequired;
