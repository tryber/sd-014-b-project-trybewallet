import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class Input extends Component {
  render() {
    const { name, label, text } = this.props;
    return (
      <label htmlFor={ name }>
        { label }
        <input
          type={ text }
          name={ name }
          id={ name }
        />
      </label>
    );
  }
}

Input.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  text: PropTypes.string,
};

Input.defaultProps = {
  name: '',
  label: '',
  text: '',
};
