import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { type, id } = this.props;
    return (
      <label htmlFor={ id }>
        {' '}
        Valor:
        <input type={ type } id={ id } />
      </label>
    );
  }
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Input;
