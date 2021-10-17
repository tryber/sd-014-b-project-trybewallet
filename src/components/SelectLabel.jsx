import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SelectLabel extends Component {
  render() {
    const { name, id, value, callbackFunc, isLoaded, ITEMS } = this.props;
    return (
      <label htmlFor={ id }>
        { `${name}: ` }
        <select
          id={ id }
          type="text"
          value={ value }
          name={ id }
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
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  callbackFunc: PropTypes.func.isRequired,
  isLoaded: PropTypes.bool,
  ITEMS: PropTypes.arrayOf(PropTypes.string).isRequired,
};

SelectLabel.defaultProps = { isLoaded: true };
