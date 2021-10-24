import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { labelText, type, name, id } = this.props;
    return (
      <label htmlFor={ id }>
        { labelText }
        <input type={ type } name={ name } id={ id } />
      </label>
    );
  }
}

Input.propTypes = {
  labelText: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Input;
