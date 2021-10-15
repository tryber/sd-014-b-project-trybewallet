import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

class InputBase extends Component {
  render() {
    const { name, type } = this.props;
    return (
      <div>
        <label htmlFor={ `input-${name}` }>
          {`${name}:`}
          <input type={ type } id={ `input-${name}` } />
        </label>
      </div>
    );
  }
}

InputBase.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
}.isRequired;

export default InputBase;
