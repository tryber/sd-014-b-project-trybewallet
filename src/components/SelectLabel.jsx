import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SelectLabel extends Component {
  render() {
    const { name, value, callbackFunc, isLoaded, ITEMS } = this.props;
    return (
      <label htmlFor={ value }>
        { `${name}: ` }
        <select
          id={ value }
          type="text"
          name={ value }
          onChange={ callbackFunc }
        >
          { isLoaded && ITEMS.map((item) => (
            <option key={ item } value={ item }>
              { item }
            </option>)) }
        </select>
      </label>
    );
  }
}

SelectLabel.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  callbackFunc: PropTypes.func.isRequired,
  isLoaded: PropTypes.bool,
  ITEMS: PropTypes.arrayOf(PropTypes.string).isRequired,
};

SelectLabel.defaultProps = { isLoaded: true };
