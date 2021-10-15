import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SelectLabel extends Component {
  render() {
    const { name, callbackFunc, ITEMS } = this.props;
    return (
      <label htmlFor={ name }>
        { `${name}: ` }
        <select
          id={ name }
          type="text"
          name={ name }
          onChange={ callbackFunc }
        >
          { ITEMS.map((item) => (
            <option key={ item } value={ item }>
              { item }
            </option>)) }
        </select>
      </label>
    );
  }
}

SelectLabel.propTypes = PropTypes.shape({
  name: PropTypes.string,
  callbackFunc: PropTypes.func,
  ITEMS: PropTypes.arrayOf(PropTypes.string),
}).isRequired;
