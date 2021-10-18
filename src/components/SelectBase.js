import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

class SelectBase extends Component {
  render() {
    const { dataAPI, newId, name, handleChange, value, label } = this.props;
    return (
      <label htmlFor={ newId }>
        { label }
        <select
          id={ newId }
          name={ name }
          onChange={ handleChange }
          value={ value }
        >
          { dataAPI.map((element) => (
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
  dataAPI: PropTypes.array,
  NewId: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;

export default SelectBase;
