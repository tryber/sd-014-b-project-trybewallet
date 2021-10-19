import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

class SelectBase extends Component {
  render() {
    const { mapIteration, idLabel, name, onChange, value, label } = this.props;
    return (
      <label htmlFor={ idLabel }>
        { label }
        <select
          id={ idLabel }
          name={ name }
          onChange={ onChange }
          value={ value }
        >
          { mapIteration.map((element) => (
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
  mapIteration: PropTypes.array,
  NewId: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;

export default SelectBase;
