import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class InputLabel extends Component {
  render() {
    const { name, callbackFunc } = this.props;
    return (
      <label htmlFor={ name }>
        { `${name}: ` }
        <input
          id={ name }
          type="text"
          name={ name }
          onChange={ callbackFunc }
        />
      </label>
    );
  }
}

InputLabel.propTypes = PropTypes.shape({
  callbackFunc: PropTypes.func,
  name: PropTypes.string,
}).isRequired;
