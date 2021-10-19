import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

class InputBase extends Component {
  render() {
    const { name, type, value, changeValue } = this.props;
    return (
      <div>
        <label htmlFor={ `input-${name}` }>
          {`${name}:`}
          <input
            name={ name }
            type={ type }
            id={ `input-${name}` }
            value={ value }
            onChange={ changeValue }
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
  changeValue: PropTypes.func,
}.isRequired;
export default InputBase;
