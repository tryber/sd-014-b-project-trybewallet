import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Input extends Component {
  render() {
    const { name, type, value, labelText } = this.props;
    return (
      <label htmlFor={ name }>
        { labelText }
        <input type={ type } name={ name } id={ name } value={ value } />
      </label>
    );
  }
}

Input.propTypes = {
  labelText: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
