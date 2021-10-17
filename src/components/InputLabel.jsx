import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class InputLabel extends Component {
  render() {
    const { name, id, value, callbackFunc } = this.props;
    return (
      <label htmlFor={ id }>
        { `${name}: ` }
        <input
          id={ id }
          value={ value }
          type="text"
          name={ id }
          onChange={ callbackFunc }
        />
      </label>
    );
  }
}

InputLabel.propTypes = PropTypes.shape({
  callbackFunc: PropTypes.func,
  name: PropTypes.string,
  id: PropTypes.string.isRequired,
  value: PropTypes.string,
}).isRequired;
