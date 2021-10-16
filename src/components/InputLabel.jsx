import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class InputLabel extends Component {
  render() {
    const { name, value, callbackFunc } = this.props;
    return (
      <label htmlFor={ value }>
        { `${name}: ` }
        <input
          id={ value }
          type="text"
          name={ value }
          onChange={ callbackFunc }
        />
      </label>
    );
  }
}

InputLabel.propTypes = PropTypes.shape({
  callbackFunc: PropTypes.func,
  name: PropTypes.string,
  value: PropTypes.string,
}).isRequired;
