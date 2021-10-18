import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { name } = this.props;
    return (
      <label htmlFor={ name }>
        { name }
        <input
          id={ name }
          name="input"
          type="text"
        />
      </label>
    );
  }
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Input;
