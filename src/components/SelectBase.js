import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

class SelectBase extends Component {
  render() {
    const { optArray, newId, name, handleValue, value, label } = this.props;
    return (
      <label htmlFor={ newId }>
        { label }
        <select
          id={ newId }
          name={ name }
          onChange={ handleValue }
          value={ value }
        >
          { optArray.map((element) => (
            <option
              key={ element }
              value={ element }
            >
              { element }
            </option>)) }
        </select>
      </label>
    );
  }
}

SelectBase.propTypes = {
  optArray: PropTypes.array,
  NewId: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  handleValue: PropTypes.func,
}.isRequired;

export default SelectBase;
