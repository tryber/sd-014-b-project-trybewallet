import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { type, id, onChange, name } = this.props;
    return (
      <label htmlFor={ id }>
        {' '}
        {id}
        <input type={ type } id={ id } name={ name } onChange={ onChange } />
      </label>
    );
  }
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
