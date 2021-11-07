import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

class InputBase extends Component {
  render() {
    const { name, type, value, onChange, label } = this.props;
    return (
      <div>
        <label htmlFor={ `input-${name}` }>
          { label }
          <input
            name={ name }
            type={ type }
            id={ `input-${name}` }
            value={ value }
            onChange={ onChange }
          />
        </label>
      </div>
    );
  }
}
InputBase.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;
export default InputBase;